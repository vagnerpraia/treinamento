const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: './App.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    plugins: [
        new ExtractTextPlugin('App.css')
    ],
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['env', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader', 
                        use: [
                            'css-loader'
                        ]
                    }
                )
            }
        ]
    }
}