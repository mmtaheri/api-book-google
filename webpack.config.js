const path = require('path');
module.exports = {
    entry: './src/index.js',     
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        // loaders: [
        //     {
        //         loader: 'babel-loader',
        //         test: /\.js$/,
        //         exclude: /node_modules/
        //     }
        // ],
  rules: [
{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
// {
//             test: /\.s[ac]ss$/,
//             use: ['style-loader', 'css-loader','sass-loader']
// }
]
    },
 
};