const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const METADATA = require('./metadata.js');

const extractLESSPlugin = new ExtractTextPlugin('css/[name].[contenthash].css');
const autoprefixer = require('autoprefixer');

module.exports = function (env) {
	
	//This is a work around to point to right asset directory when using githubpages
	if(process.env.deployenv==='ghpage') rootPath='/spd-web-app'        
    else rootPath=''
	
	
    return {
        entry: {
            app: './src/index.tsx'
        },

        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: '[name].[chunkhash].js'
        },

        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.tsx?$/,
                    loader: 'tslint-loader',
                    options: {
                        fileOutput: {
                            // The directory where each file's report is saved
                            dir: './lint-reports/',

                            // The extension to use for each report's filename. Defaults to 'txt'
                            ext: 'xml',

                            // If true, all files are removed from the report directory at the beginning of run
                            clean: true,

                            // A string to include at the top of every report file.
                            // Useful for some report formats.
                            header: '<?xml version="1.0" encoding="utf-8"?>\n<checkstyle version="5.7">',

                            // A string to include at the bottom of every report file.
                            // Useful for some report formats.
                            footer: '</checkstyle>'
                        }
                    }
                },
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    loader: 'source-map-loader'
                },

                {
                    enforce: 'pre',
                    test: /\.tsx?$/,
                    use: 'source-map-loader'
                },
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    },
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'style-loader' // creates style nodes from JS strings
                        },
                        {
                            loader: 'css-loader' // translates CSS into CommonJS
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: function () {
                                    return [autoprefixer]
                                }
                            }
                        },
                        {
                            loader: 'sass-loader' // compiles Sass to CSS
                        }
                    ]
                },

                {

                    test: /\.(jpg|jpeg|png|svg)(\?.*)?$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath:'/assets/images/',
                            publicPath:rootPath+'/assets/images/' //This is a work around to point to right directory when using githubpages
                        }
                    }
                },
                {
                    test: /\.(woff|woff2|eot|ttf)($|\?)/,
                    loader: 'url-loader?limit=5000&hash=sha512&digest=hex&size=16&name=fonts/[name]-[hash].[ext]'
                }
            ]
        },

        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.less'],
            alias: {
                assets: path.resolve('./assets')
            },
        },

        plugins: [

            new webpack.ProvidePlugin({
                React: 'react',
                ReactDOM: 'react-dom'
            }),
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
                jquery: 'jquery'
            }),
            extractLESSPlugin,

            new HtmlWebpackPlugin({
                template: 'src/index.html',
                filename: 'index.html',
                metadata: METADATA
            })
        ]
    }
};