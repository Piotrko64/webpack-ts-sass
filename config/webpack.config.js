const path = require("path");
// import path from 'path';
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.ts",
    },
    output: {
        filename: "js/[name]-[contenthash].js",
        path: path.resolve(__dirname, "../", "build"),
    },
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, "../", "public"),
        port: 5001,
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.txt$/,
                use: "raw-loader",
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                // use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "src/templates/template.html",
            title: "nowa aplikacja",
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name]-[contenthash].css",
        }),
    ],
};
