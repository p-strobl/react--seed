const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssUrlRelativePlugin = require("css-url-relative-plugin");

module.exports = {
  // Providing the mode configuration option tells webpack to use its built-in optimizations.
  mode: "production",
  // An entry point indicates which module webpack should use
  entry: "./src/index.js",
  // The output property tells webpack where to emit the bundles it creates and file name
  output: {
    filename: "assets/js/bundle.js", // Bundle name.
    path: resolve(__dirname, "./dist"), // Bundle root.
    crossOriginLoading: "anonymous",
  },
  devServer: {
    historyApiFallback: true, // index.html page will be served in place of any 404 responses.
    contentBase: resolve(__dirname, "./dist"), // Will use working directory to serve content.
    // publicPath: "./", // The bundled files will be available in the browser under this path.
    open: true, // Opens Browser window after server start.
    overlay: true, // Shows a full-screen overlay in the browser when there are compiler errors or warnings.
    writeToDisk: true, // Tells devServer to write generated assets to the disk.
    stats: {
      // The stats option lets you precisely control what bundle information gets displayed
      assets: true,
      children: false,
      colors: true,
      entrypoints: true,
      outputPath: false,
      modules: false,
      source: false,
    },
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
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".css", ".scss", ".ttf", ".png", "..."],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            sourceMap: false,
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            sourceMap: false,
          },
        },
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "html-loader",
          },
        ],
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
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|ico|webmanifest|xml|svg)$/,
        type: 'asset/resource',
        assetModuleFilename: 'assets/images/[hash][ext][query]'
      },
      {
        test: /\.(ttf|svg|woff|woff2|otf|eot)$/,
        type: 'asset/resource',
        assetModuleFilename: 'assets/fonts/[name].[ext]',
      },
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
    // Convert css url(...) to relative path
    new CssUrlRelativePlugin(),
    // Process environment variables
    new Dotenv({
      path: resolve(__dirname, "./.env"),
    }),
    new webpack.DefinePlugin({
      // "process.env.CLIENT_ID": JSON.stringify(process.env.CLIENT_ID),
    }),
  ],
};
