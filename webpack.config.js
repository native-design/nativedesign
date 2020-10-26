const path = require('path');

const TerserJSPlugin = require('terser-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve('./src/js/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '../',
        library: 'nd',
        libraryTarget: 'var'
    },
    watch: true,
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'css/index',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                },
            },
        },
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }, {
            test: /\.(woff(2)?|otf|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
        }, {
            test: /(\.jsx|\.js)$/,
            use: "babel-loader",
            exclude: path.resolve(__dirname, "node_modules"),
            include: path.resolve(__dirname, "src")
        }]
    }
}
