/**
 * Created by xudao on 16/12/26.
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlFs = require('./htmlfs.js');

module.exports = {
    //entry: [__dirname + "/app/main.js"],
    entry:{
        index: __dirname + "/app/main.js",
        vendor: ['react', 'react-dom', 'react-router', 'redux', 'react-redux', 'redux-thunk', 'swiper', 'react-addons-css-transition-group', 'react-tap-event-plugin']
    },
    output: {
        path: __dirname + "/build",
        //filename: "bundle.js",
        filename: "[name].[chunkHash:8].js",
        publicPath: '/',
        chunkFilename: "[name].[chunkHash:8].js"
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/build/index.html",
            inject: true,
            cache:true,
            showErrors: false
        }),
        new HtmlFs({options: {
            path: __dirname + "/build/"
        }})
    ],

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }
};
