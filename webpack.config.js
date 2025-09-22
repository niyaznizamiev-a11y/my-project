import path, {dirname} from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {fileURLToPath} from "url";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    mode: 'development',
    entry: './src/index.tsx',
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'}),
        new MiniCssExtractPlugin()
    ],
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        filename: '[contenthash].[name].js',
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                namedExport: true,
                            },
                        },
                    },
                    "postcss-loader",
                    "sass-loader",
                ],
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