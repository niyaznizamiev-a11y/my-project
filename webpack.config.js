const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "./main.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    hot: true,
    open: true, // автоматически открыть браузер
    client: {
      logging: 'info', // включить логирование
      overlay: true, // показывать ошибки на странице
    }
  },
  stats: 'normal', // добавить вывод статистики

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
  test: /\.css$/,
  use: [
    "style-loader",  // внедряет стили в DOM
    "css-loader"     // загружает CSS файлы
  ]
},
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};