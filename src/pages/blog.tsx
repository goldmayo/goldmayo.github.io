import Seo from "@components/Seo";
import Layout from "@components/layout/Layout";
import { HeadFC, graphql } from "gatsby";
import React, { FC } from "react";
type BlogPostNode = {
  frontmatter: {
    title: string;
    date: string;
  };
  id: string;
  excerpt: string;
};
interface IblogProps {
  data: {
    allMdx: {
      nodes: BlogPostNode[];
    };
  };
}

const blog: FC<IblogProps> = ({ data }) => {
  return (
    <Layout>
      <h1>blog</h1>
      {data.allMdx.nodes.map((node: BlogPostNode) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title={"My Blog Posts"} description={""} children={undefined} />;

export default blog;
