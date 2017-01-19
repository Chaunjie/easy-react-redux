/**
 * Created by xudao on 16/12/26.
 */

var webpack = require('webpack');

module.exports = {
    entry: [__dirname + "/app/main.js"],
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
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
        })
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
