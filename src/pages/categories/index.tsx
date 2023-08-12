import { graphql, HeadFC, Link, PageProps } from "gatsby";
import React from "react";
import Layout from "@components/layout/Layout";
import Seo from "@components/Seo";

// const Categories: React.FC<PageProps<DataProps>> = () => {
const Categories: React.FC<PageProps<Queries.CategoriesQuery>> = ({ data, location }) => {
  const categories = data.allMdx.group;
  return (
    <Layout>
      <div>
        <ul>
          {categories.map((category) => (
            <li key={category.fieldValue}>
              <Link to={`/categories/${category.fieldValue}/`}>
                {category.fieldValue}({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
export const Head: HeadFC = () => <Seo title={"카테고리 | 현승재 테크블로그"} description={""} children={undefined} />;

export default Categories;

export const categoriesPageQuery = graphql`
  query Categories {
    allMdx(limit: 2000, sort: { frontmatter: { date: DESC } }) {
      group(field: { frontmatter: { categories: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
