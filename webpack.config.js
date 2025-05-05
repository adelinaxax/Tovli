const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.ts',

    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.hbs$/,
                use: {
                    loader: 'handlebars-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: (pathData) => {
                        if (pathData.filename.includes('main-banner')) {
                            return 'components/main-banner/assets/[name][ext]';
                        }
                        return 'images/[name][ext]';
                    }
                }
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.hbs',
            filename: 'index.html',
        }),
        // Копирование дополнительных файлов если нужно
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/components/main-banner/assets',
                    to: 'components/main-banner/assets',
                    noErrorOnMissing: true
                },
                {
                    from: 'src/images',
                    to: 'images',
                    noErrorOnMissing: true
                },
            ]
        })
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
        open: true
    }
};