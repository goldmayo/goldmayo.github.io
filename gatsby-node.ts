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
    const result = await graphql<Queries.CategoriesQuery>(`
        query Categories {
            allMdx(limit: 2000, sort: { frontmatter: { date: DESC } }) {
              group(field: { frontmatter: { categories: SELECT } }) {
                fieldValue
                totalCount
              }
            }
          }
    `)

    if (result.errors || !result.data) {
        reporter.panicOnBuild(`Error at create category page while running GraphQL query`)
        return
    }

    const categoryTemplatePath = path.resolve("src/templates/CategoryTemplate.tsx");

    result.data.allMdx.group?.forEach((category) => {
        actions.createPage({
            path: `/categories/${category.fieldValue}`,
            component: categoryTemplatePath,
            context: { category: category.fieldValue }
        })
    })
}