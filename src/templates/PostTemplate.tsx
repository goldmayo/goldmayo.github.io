import React, { FC } from "react";
import { PageProps, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import Layout from "@components/layout/Layout";
import MDXComponents from "@components/MdxStyleCompoenets";

const PostTemplate: FC<PageProps<Queries.BlogPostQuery, Queries.BlogPostQueryVariables>> = ({
  data,
  location,
  pageContext,
  children,
}) => {
  const { title, date } = data.mdx?.frontmatter as { title: string; date: string };
  return (
    <Layout>
      <small>{date}</small>
      <MDXProvider components={MDXComponents}>{children}</MDXProvider>
    </Layout>
  );
};

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

export default PostTemplate;
