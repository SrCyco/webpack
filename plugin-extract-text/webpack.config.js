const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // Aqui van los loaders
            {
                // test: que tipo de archivo quiero reconocer,
                // use: que loader se va a encargar del archivo
                test: /\.css$/,
                // use: MiniCssExtractPlugin.extract({
                    // ['style-loader','css-loader']
                    // fallback: 'style-l oader'
                    // use: "css-loader"
                // })
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        // Aqui van los plugins
        // new ExtractTextPlugin("css/styles.css")
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ]

}