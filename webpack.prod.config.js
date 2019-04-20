const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode : 'production',
    output: {
        path: __dirname + "/dist",                    //打包后的文件存放的地方
        filename: "[name]-bundle-[chunkhash:8].js"       //打包后输出文件的文件名
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use:[
                    miniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename:'[name].bundle.[contenthash:8].css'                            //根目录入口页面名称
        })
    ]
});
