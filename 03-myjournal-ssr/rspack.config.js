const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    articles: "./src/client/articles.js",
    articleId: "./src/client/articleId.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        type: "jsx",
      },
    ],
  },
  externalsPresets: {
    node: true,
  },
};
