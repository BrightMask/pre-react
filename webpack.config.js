var path = require ('path')
var webpack = require('webpack')

module.exports = {
    entry:path.resolve(__dirname,'./index.js'),
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js',
        publicPath: '/build/',
        chunkFilename:'[name].[chunkhash].js'
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                exclude:'/node_modules/',
                loader:'babel-loader',
                query:{
                    presets:['es2015','react','stage-0']
                }
            },
            {
               test: /\.less$/,
               use: ['style-loader','css-loader',"less-loader"]
            },
            {
               test: /\.css$/,
               use: ['style-loader','css-loader']
           },
           {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.bundle\.js$/,
                exclude:/node_modules/,
                use: [{
                    loader:'bundle-loader',
                    options:{
                        lazy:true
                    }
                }]

            }
        ]
    },

    devServer: {
        // contentBase:'./',
        historyApiFallback: true,
        compress:true,
        hot: true,
        open: true,
        inline: true,
        port: 8080
    },
    plugins: [
       new webpack.HotModuleReplacementPlugin(),
   ]
}
