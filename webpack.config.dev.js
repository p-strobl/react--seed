const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // Providing the mode configuration option tells webpack to use its built-in optimizations.
  mode: "development",
  // An entry point indicates which module webpack should use
  entry: "./src/index.js",
  // The output property tells webpack where to emit the bundles it creates and file name
  output: {
    filename: "assets/js/bundle.js", // Bundle name.
    path: resolve(__dirname, "./dist"), // Bundle root.
    crossOriginLoading: "anonymous",
    assetModuleFilename: 'assets/images/[name].[ext]'
  },
  devServer: {
    historyApiFallback: true, // index.html page will be served in place of any 404 responses.
    open: true, // Opens Browser window after server start.
    hot: true, // Hot Reloading
  },
  devtool: "source-map", // Creates a source-map for better debugging.
  // These options change how modules are resolved
  resolve: {
    modules: [resolve(__dirname, "./src"), "node_modules"],
    alias: {
      Assets: resolve(__dirname, "./src/assets"),
      Atoms: resolve(__dirname, "./src/atoms"),
      Components: resolve(__dirname, "./src/components"),
      Container: resolve(__dirname, "./src/container"),
      Context: resolve(__dirname, "./src/context"),
      Data: resolve(__dirname, "./src/data"),
      Helper: resolve(__dirname, "./src/helper"),
      Images: resolve(__dirname, "./src/assets/images"),
      Modules: resolve(__dirname, "./src/modules"),
      Pages: resolve(__dirname, "./src/pages"),
      PublicAssets: resolve(__dirname, "./public/assets"),
      Scss: resolve(__dirname, "./src/scss"),
    },
    extensions: [".js", ".jsx", ".json", ".css", ".scss", ".ttf", ".png"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|ico|webmanifest|xml|svg)$/,
        type: 'asset/resource',
      },
      // {
      //   test: /\.(ttf|svg|woff|woff2|otf|eot)$/,
      //   type: 'asset/resource',
      //   assetModuleFilename: 'assets/fonts/[name].[ext]',
      // },
    ],
  },
  plugins: [
    // Cleanup /dist folder on every build.
    new CleanWebpackPlugin(),
    // Will generate an HTML5 file that includes all bundles(js, css).
    new HtmlWebPackPlugin({
      template: resolve(__dirname, "public", "index.html"),
    }),
    // Extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
    new MiniCssExtractPlugin({
      filename: "assets/css/bundle.css",
    }),
    // Process environment variables
    new Dotenv({
      path: resolve(__dirname, "./.env.development"),
    }),
  ],
};
