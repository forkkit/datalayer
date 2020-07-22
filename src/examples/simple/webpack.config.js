const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  watchOptions: {
    aggregateTimeout: 300,
    poll: 2000, // Seems to stabilise HMR file change detection
    ignored: "/node_modules/"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3101
  },
  output: {
    publicPath: "http://localhost:3101/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
          cacheDirectory: true
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "simpleExample",
      library: { type: "var", name: "dlaSimpleExample" },
      remotes: {
        dlaUtils: "dlaUtils",
        dlaWidgets: "dlaWidgets",
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
