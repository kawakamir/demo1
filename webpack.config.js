const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
  },
  module: {
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: "ts-loader",
      },
    ],
  },
};
