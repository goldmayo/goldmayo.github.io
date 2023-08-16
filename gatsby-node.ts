import { GatsbyNode } from "gatsby";
import * as path from "path"

exports.onCreateWebpackConfig = ({
    //@ts-ignore
    actions
}) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, "src/components"),
                "@pages": path.resolve(__dirname, "src/pages"),
                "@hooks": path.resolve(__dirname, "src/hooks"),
                "@styles": path.resolve(__dirname, "src/styles"),
                "@templates": path.resolve(__dirname, "src/templates"),
                "@utils": path.resolve(__dirname, "src/utils"),
                "@seo": path.resolve(__dirname, "src/seo"),
            },
        },
    });
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const postQueryResult = await graphql<Queries.AllBlogPostQuery>(`
        query AllBlogPost {
            allMdx {
                nodes {
                  id
                  frontmatter {
                    title
                    slug
                  }
                  internal {
                    contentFilePath
                  }
                }
              }
        }
    `)

    if (postQueryResult.errors) {
        reporter.panicOnBuild('Error loading MDX result', postQueryResult.errors)
    }
    const posts = postQueryResult.data?.allMdx?.nodes
    const postsTemplatePath = path.resolve("./src/templates/PostTemplate.tsx");

    posts?.forEach(node => {
        createPage({
            path: `/categories/${node.frontmatter?.slug!}`,
            component: `${postsTemplatePath}?__contentFilePath=${node.internal.contentFilePath}`,
            context: { id: node.id }
        })
    });

    const result = await graphql<Queries.CategoriesQuery>(`
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
          `)

    if (result.errors || !result.data) {
        reporter.panicOnBuild(`Error at create category page while running GraphQL query`)
        return
    }

    const categoryTemplatePath = path.resolve("./src/templates/CategoryTemplate.tsx");

    result.data.allMdx?.group?.forEach((category) => {
        createPage({
            path: `/categories/${category.fieldValue}`,
            component: categoryTemplatePath,
            context: { category: category.fieldValue }
        })
    })
}