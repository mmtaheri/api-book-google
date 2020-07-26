const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        // loaders: [
        //     // {
        //     //     test: /\.js$/,
        //     //     loader: 'babel-loader',
        //     //     exclude: /node_modules/
        //     // }
        // ],
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
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
                        use: ['style-loader', 'css-loader','sass-loader']
            }
        ]
    },

};