const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // .css 로 끝나는 파일은
        use: ["style-loader", "css-loader"], // 이 loader를 사용해 번들링한다.
      },
    ],
  },
};
