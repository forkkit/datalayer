const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  watchOptions: {
    aggregateTimeout: 300,
    poll: 2000, // Seems to stabilise HMR file change detection
    ignored: "/node_modules/"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3003,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
  output: {
    publicPath: "http://localhost:3003/",
    filename: '[name].[contenthash].dlaStudio.js',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
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
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
          cacheDirectory: true
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|ttf|woff|woff2|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{ loader: 'url-loader', options: { limit: 10000 } }],
      },
     ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "studio",
      library: { type: "var", name: "dlaStudio" },
      remotes: {
        dlaWidgets: "dlaWidgets",
        dlaIam: "dlaIam",
      },
      shared: [
        "@material-ui/core",
//        "@jupyterlab/ui-components",
        "react", 
        "react-dom",
        "styled-components",
        "react-router-dom",
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
