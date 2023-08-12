import Seo from "@components/Seo";
import Layout from "@components/layout/Layout";
import { HeadFC, Link, PageProps, graphql } from "gatsby";
import React, { FC } from "react";

const CategoryTemplate: FC<PageProps<Queries.CategoriesItemQuery, Queries.CategoriesItemQueryVariables>> = ({
  data,
  location,
  pageContext,
}) => {
  const { edges, totalCount } = data.allMdx;
  const { category } = pageContext;
  return (
    <Layout>
      <h2>
        {category}({totalCount})
      </h2>
      <ul>
        {edges.map((item) => (
          <li key={item.node.id}>
            <Link to={`/categories/${item.node.frontmatter?.slug}`}>{item.node.frontmatter?.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const Head: HeadFC<Queries.CategoriesItemQuery, Queries.CategoriesItemQueryVariables> = ({ pageContext }) => (
  <Seo title={`${pageContext.category} | 현승재 테크블로그`} description={""} children={undefined} />
);

export const categoryTemplatePageQuery = graphql`
  query CategoriesItem($category: String) {
    allMdx(
      limit: 1000
      sort: { frontmatter: { date: ASC } }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
