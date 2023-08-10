import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import highlightCode from "@utils/highlightCode";
import { DiscordIcon, GithubIcon, NotionIcon } from "@utils/icons";
import Layout from "@components/layout/Layout";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Main from "@components/Main";

export const Head: HeadFC = () => (
  <>
    <title>현승재 | 프론트엔드 개발자</title>
  </>
);

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    highlightCode();
  });
  return (
    <Layout>
      <Main />
    </Layout>
  );
};

export default IndexPage;
