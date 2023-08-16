import CategoryBox from "@components/CategoryBox";
import Seo from "@components/Seo";
import Layout from "@components/layout/Layout";
import { HeadFC, Link, PageProps, graphql } from "gatsby";
import React, { FC } from "react";

const CategoryTemplate: FC<PageProps<Queries.CategoriesItemQuery, Queries.CategoriesItemQueryVariables>> = ({
  data,
  location,
  pageContext,
  children,
}) => {
  const { edges, totalCount } = data.allMdx;
  const { category } = pageContext;
  return (
    <Layout>
      <h2 className="mx-auto mb-3 font-bold text-center text-headline4">
        {category?.toUpperCase()}({totalCount})
      </h2>
      <ul className="flex flex-col gap-4">
        {edges.map((item) => (
          <li key={item.node.id}>
            <CategoryBox
              data={{
                title: item.node.frontmatter?.title!,
                category: item.node.frontmatter?.category as string[],
                date: item.node.frontmatter?.date!,
                slug: item.node.frontmatter?.slug!,
                excerpt: item.node.excerpt!,
              }}
            />
          </li>
        ))}
      </ul>
      {children}
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
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date
            category
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;

export default CategoryTemplate;
