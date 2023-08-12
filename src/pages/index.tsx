import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "@components/layout/Layout";
import Main from "@components/Main";
import Seo from "@components/Seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Main />
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title={"현승재 | 프론트엔드개발자"} description={""} children={undefined} />;

export default IndexPage;
