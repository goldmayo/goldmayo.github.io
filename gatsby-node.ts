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