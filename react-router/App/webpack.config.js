var webpack=require('webpack'),
   path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
OpenBrowserPlugin=require('open-browser-webpack-plugin'),
 HtmlWebpackPlugin = require('html-webpack-plugin');
  //OpenBrowserPlugin=require('open-browser-webpack-plugin');

   //  HtmlWebpackPlugin = require('html-webpack-plugin'),

module.exports={
    // 页面入口文件配置
//    entry:{ app:'../App/src/index.js' },
    entry: path.resolve(__dirname, 'src/index.js'),

// 这里应该是 index.js
    // /App/src/index.jsx =>E://App/src/index.jsx
    // ./App/src/index.jsx=>./App/src/index.jsx
    // ../src/index.jsx=>../src/index.jsx
    // App/src/index.jsx=>ReactLittleBook\App\APP\src...
    // src/index.jsx=>./src/index.jsx
    // ./src/index.jsx=>../src/index.jsx
    // ../../App/src/index.jsx=>
    //../App/src/index.js  这个可以 但是显示的页面只有 dist 和package.json

    // 入口文件输出
    output:{
         path: path.join(__dirname, 'dist'),
         filename: 'js/[name].min.js',
     },
     //其它解决方案配置  
     resolve:{
       alias:{
           'root':path.resolve(__dirname,'src'),  
           'dc':path.resolve(__dirname, 'src/areas/dc'),
           'vms':path.resolve(__dirname, 'src/areas/vms')
       }
     },
     // 模块规则
     module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'babel-loader?cacheDirectory=true',
                    options: {
                        presets: ['es2015', 'react', 'stage-0'],
                        plugins: ['babel-plugin-transform-decorators-legacy']
                    }
                }]
            },
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader-once']
                })
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: 'url-loader?limit=1000&name=[folder]/[name].[ext]'
            }
        ]
    },
     plugins: [
       // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html'
        }),
          // 热加载插件
        new webpack.HotModuleReplacementPlugin(),
         // 打开浏览器
      new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        // 最小化压缩react
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
            // 'process.env': {
            //     'NODE_ENV': JSON.stringify('production')
            // }
        }),
        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: Infinity,
            filename: 'js/vendors.min.js'
        }),
        // 分离 css 和 js 文件
        new ExtractTextPlugin({
            filename:'css/[name].min.css',
            allChunks:true
        }),
        new webpack.NamedModulesPlugin()
    ]
}