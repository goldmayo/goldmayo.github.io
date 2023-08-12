import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query useSiteMetaData {
      site {
        siteMetadata {
          title
          description
          #   twitterUsername
          #   image
          #   siteUrl
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
