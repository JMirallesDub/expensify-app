
module.exports = {
    entry: './src/playground/redux-101.js',
    output: {
        path: __dirname + '/public',
        filename: 'budle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: __dirname + '/public'
    }
};