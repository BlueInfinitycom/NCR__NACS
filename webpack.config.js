const path=require("path");
const ASSET_PATH = process.env.ASSET_PATH || '/img/';
const HtmlWebpackPlugin=require("html-webpack-plugin");
const TerserPlugin= require("terser-webpack-plugin");

module.exports=env=>{
    // console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
//   console.log('Production: ', env.production); // true

    return {
    entry:"./src/index.js",
    output: {
        filename:"custom.js",
        path:path.join(__dirname,"/dist/img/")
        // publicPath: ASSET_PATH,
        // path:path.resolve(__dirname,"./dist/img/")
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            }
            ,{
                test:/\.(jpg|png|svg)$/,
                use:{
                    loader: "file-loader",
                    options:{
                        name: "./img/[name].[ext]"
                    }
                }
            },
            {
                test: /\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                template:"./src/index.html",
                filename:"index.html"
            }
        ),
        new TerserPlugin()
    ]
}
}