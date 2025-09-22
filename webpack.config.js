const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, "js", "main.js"),      
    dashboard: path.resolve(__dirname, "js", "sum.js")
  },
  mode: 'development',
  output: {
    filename: '[contenthash].[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: path.resolve(__dirname, "public", "index.html"),
      filename: 'index.html',
      chunks: ['main'] 
    }),
    new HtmlWebpackPlugin({ 
      template: path.resolve(__dirname, "public", "2.html"),
      filename: 'dashboard.html',
      chunks: ['dashboard'] 
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    open: true,
  }
};