var {resolve} = require('path');
var webpack =require('webpack');

module.exports = {
    entry: [
        './index.tsx'
    ],
    output:{
        filename: 'bundle.js',
        path: resolve(__dirname, 'static'),
        publicPath: ''
    },
    resolve:{
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css']
    },
    context: resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    devServer:{
        hot: true,
        contentBase: resolve(__dirname, 'static'),
        publicPath: ''
    },
    module: {
        rules:[{
                test: /\.(ts|tsx)$/,
                use: ['awesome-typescript-loader']
            },{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: []
};
