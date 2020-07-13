const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";

  return {
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
        // SASS modules
        {
          test: /\.module\.scss$/,
          loader: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: isDevelopment
                    ? "[name]__[local]"
                    : "[hash:base64:5]",
                },
                sourceMap: isDevelopment,
                localsConvention: "camelCase",
              },
            },
            "resolve-url-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: isDevelopment,
              },
            },
          ],
        },
        // Normal SASS
        {
          test: /\.scss$/,
          exclude: /\.module.(scss)$/,
          loader: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "resolve-url-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: isDevelopment,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? "[name].css" : "[name].[hash].css",
        chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
      }),
      new Dotenv(),
    ],
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
    },
    // Development
    devtool: isDevelopment ? "inline-source-map" : "none",
    devServer: {
      port: 3000,
      compress: true,
    },
  };
};
