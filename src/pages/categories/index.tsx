import { graphql, HeadFC, Link, PageProps } from "gatsby";
import React from "react";
import Layout from "@components/layout/Layout";
import Seo from "@components/Seo";
import CategoryBox from "@components/CategoryBox";

const Categories: React.FC<PageProps<Queries.CategoriesQuery>> = ({ data, location }) => {
  const categories = data.allMdx.group;
  const allBlogPost = data.allMdx.nodes;
  return (
    <Layout>
      <div>
        {/* <nav aria-label="blog post category navigation" className="">
          <ul className="flex justify-around">
            {categories.map((category) => (
              <li key={category.fieldValue}>
                <Link to={`/categories/${category.fieldValue}/`}>
                  {category.fieldValue}({category.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </nav> */}
        <h2 className="mx-auto mb-4 font-bold text-center text-headline4">All Post({allBlogPost.length})</h2>
        <div>
          <ul className="flex flex-col gap-4">
            {allBlogPost.map((post) => (
              <li key={post.id}>
                <CategoryBox
                  data={{
                    title: post.frontmatter?.title!,
                    category: post.frontmatter?.category as string[],
                    date: post.frontmatter?.date!,
                    slug: post.frontmatter?.slug!,
                    excerpt: post.excerpt!,
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};
export const Head: HeadFC = () => <Seo title={"포스트 | 현승재 테크블로그"} description={""} children={undefined} />;

export default Categories;

export const categoriesPageQuery = graphql`
  query Categories {
    allMdx(limit: 2000, sort: { frontmatter: { date: DESC } }) {
      group(field: { frontmatter: { category: SELECT } }) {
        fieldValue
        totalCount
      }
      nodes {
        id
        frontmatter {
          title
          date
          slug
          category
        }
        excerpt(pruneLength: 400)
      }
    }
  }
`;
