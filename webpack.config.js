const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    devtool: false,
    entry: "./src/index.tsx",
    output: {
        filename: "[name].[hash].js",
        path: path.join(__dirname, "dist")
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: {
            index: "./index.html"
        }
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            "@": path.resolve("src")
        }
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}