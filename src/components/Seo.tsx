import useSiteMetadata from "@hooks/useSiteMetadata";
import React, { FC } from "react";

interface ISeoProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Seo: FC<ISeoProps> = (props) => {
  const { title: defaultTitle, description: defaultDescription } = useSiteMetadata();
  const seo = {
    title: props.title || defaultTitle,
    description: props.description || defaultDescription,
  };
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {/* <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      <link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png?v=53aa06cf17e4239d0dba6ffd09854e02" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png?v=53aa06cf17e4239d0dba6ffd09854e02" />
      <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png?v=53aa06cf17e4239d0dba6ffd09854e02" />
      <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png?v=53aa06cf17e4239d0dba6ffd09854e02" />
      <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png?v=53aa06cf17e4239d0dba6ffd09854e02" />
      <link rel="apple-touch-icon" sizes="256x256" href="/icons/icon-256x256.png?v=53aa06cf17e4239d0dba6ffd09854e02" />
      <link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png?v=53aa06cf17e4239d0dba6ffd09854e02" />
      <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png?v=53aa06cf17e4239d0dba6ffd09854e02" />
      {props.children}
    </>
  );
};

export default Seo;
