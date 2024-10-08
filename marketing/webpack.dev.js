const {merge} = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const devConfig = {
    mode: 'development',
    devServer: {
        port:8081,
        historyApiFallback: {
            index: '/index.html',
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name:'marketing',
            filename:'remoteEntry.js',
            exposes: {
                './MarketingIndex':'./src/bootstrap'
            },
            shared:['react','react-dom']
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
    ] 
}

module.exports = merge(commonConfig,devConfig);