/* global module:false, __dirname:false */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [
            {
                test:    /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.json']
    },

    plugins: [
        new webpack.ProvidePlugin({
            'Promise': 'es6-promise'
        })
    ]
};
