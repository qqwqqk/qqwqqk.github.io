const htmlWebpackPlugin = require('html-webpack-plugin');   //引入HTML插件
const cleanWebpackPlugin = require('clean-webpack-plugin'); //引入清除文件插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry:  {
        main : __dirname + "/src/script/main.js",
        error: __dirname + "/views/error/main.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
                //exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader?limit=20000'
            },
            {
                test: /\.vue$/,
                use:[
                    {
                        loader: "vue-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: __dirname + "/src/index_tmp.html",
            filename:'../index.html',                            //根目录入口页面名称
            inject: 'true',
            chunks: ['main']
        }),
        new htmlWebpackPlugin({
            template: __dirname + "/views/error/index_tmp.html",
            filename:'../views/error/index.html',                            //根目录入口页面名称
            inject: 'true',
            chunks: ['error']
        }),
        new cleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'                       //内部为正则表达式  vue结尾的
        }
    }
};