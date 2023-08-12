import Seo from "@components/Seo";
import Layout from "@components/layout/Layout";
import { HeadFC, PageProps, graphql } from "gatsby";
import React, { FC } from "react";

const BlogPost: FC<PageProps<Queries.BlogPostQuery, Queries.BlogPostQueryVariables>> = ({
  data,
  location,
  pageContext,
  children,
}) => {
  return (
    <Layout>
      {data.mdx?.frontmatter && (
        <>
          <h2>{data.mdx?.frontmatter?.title}</h2>
          <small>{data.mdx?.frontmatter?.date}</small>
          {children}
        </>
      )}
    </Layout>
  );
};

export const Head: HeadFC<Queries.BlogPostQuery, Queries.BlogPostQueryVariables> = ({ data }) => (
  <Seo title={`${data.mdx?.frontmatter?.title} | 현승재 테크블로그`} description={""} children={undefined} />
);

export const BlogPostPageQuery = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export default BlogPost;
