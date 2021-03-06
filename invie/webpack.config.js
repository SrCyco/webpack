const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");


module.exports = (env) => {
    const plugins = [
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css"
        })
    ]
    if(env.NODE_ENV === 'production'){
        plugins.push(
            new CleanWebpackPlugin()
        )
    }
    return {
        mode: 'development',
        entry: {
            invie: path.resolve(__dirname, 'src/index.js')
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].[hash].js',
            publicPath: path.resolve(__dirname, 'dist')+"/",
            chunkFilename: 'js/[id].[chunkhash].js'
        },
        devServer: {
            port: 9000
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    sourceMap: true
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: [require('@babel/plugin-proposal-object-rest-spread')]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                minimize: true
                            }
                        },
                        'css-loader'
                    ]
                },
                {
                    test: /\.(jpg|png|gif|svg)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            fallback: 'file-loader',
                            name: 'images/[name].[hash].[ext]'
                        }
                    }
                }
            ]
        },
        plugins
    }   
}