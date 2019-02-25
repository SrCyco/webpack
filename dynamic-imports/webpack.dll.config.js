const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        modules:['react','react-dom'],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
        library: '[name]'
    },
    // module: {
    //     rules: [
    //         // Aqui van los loaders
    //         {
    //             // test: que tipo de archivo quiero reconocer,
    //             // use: que loader se va a encargar del archivo
    //             test: /\.css$/,
    //             // use: MiniCssExtractPlugin.extract({
    //                 // ['style-loader','css-loader']
    //                 // fallback: 'style-l oader'
    //                 // use: "css-loader"
    //             // })
    //             use: [
    //                 MiniCssExtractPlugin.loader, 
    //                 {
    //                     loader: 'css-loader',
    //                     options: {
    //                         modules: true,
    //                         importLoaders: 1
    //                     }
    //                 },
    //                 'postcss-loader'
    //             ]
    //         },
    //         {
    //             // test: que tipo de archivo quiero reconocer,
    //             // use: que loader se va a encargar del archivo
    //             test: /\.scss$/,
    //             // use: MiniCssExtractPlugin.extract({
    //             // ['style-loader','css-loader']
    //             // fallback: 'style-l oader'
    //             // use: "css-loader"
    //             // })
    //             use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    //         },
    //         {
    //             test: /\.js$/,
    //             use: {
    //                 loader: 'babel-loader',
    //                 options: {
    //                     presets: ['@babel/env', '@babel/react']
    //                 }
    //             }
    //         },
    //         {
    //             test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
    //             use: {
    //                 loader: 'url-loader',
    //                 options: {
    //                     limit: 100000,
    //                 }
    //             }
    //         }
    //     ]
    // },
    plugins: [
        // Aqui van los plugins
        // new ExtractTextPlugin("css/styles.css")
        // new MiniCssExtractPlugin({
        //     filename: "css/[name].css"
        // })
        new webpack.DllPlugin({
            name: "[name]",
            path: path.join(__dirname, "[name]-manifest.json")
        })
    ]
}