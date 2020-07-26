const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
 
 
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
   
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader,'css-loader'],
          },
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                      '@babel/transform-runtime'
                  ]
                 
                  }
                }
              },
            {
                 test: /\.s[ac]ss$/,
                 use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            }
        ]
    },
    plugins: [
     
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
      }),
    ],

};