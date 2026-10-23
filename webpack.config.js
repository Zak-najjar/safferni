import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import webpack from "webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry: {
    index: "./src/index.js",
    swiper: "./src/swiper.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: false,
    compress: true,
    port: 9000,
    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },
      {
        test: /\.(sc|sa|c)ss$/i,
        exclude: /rtlboot\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /rtlboot\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "rtlcss-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "./images/[name][ext]",
        },
      },
      {
        test: /\.(eot|ttf|woff)$/i,
        type: "asset/resource",
        generator: {
          filename: "./fonts/[name][ext]",
        },
      },
    ],
  },
  optimization: {
    minimize:true,
    minimizer: [
    new CssMinimizerPlugin(),
    ],
  },
  // if you don't need swiper at your page you must remove swiper  from chunks
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["index", "swiper"],
    }),
    new HtmlWebpackPlugin({
      filename: "pageEygpt.html",
      template: "./src/pageEygpt.html",
      chunks: ["index", "swiper"],
    }),
    new HtmlWebpackPlugin({
      filename: "pageTurkey.html",
      template: "./src/pageTurkey.html",
      chunks: ["index", "swiper"],
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: "./src/login.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "register.html",
      template: "./src/register.html",
      chunks: ["index"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
};
