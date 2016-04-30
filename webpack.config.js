var path = require('path');

module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "public/js/bundle.js",
        sourceMapFilename: "public/js/bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/
            },
            {
              test: /\.js$/,
              loaders: ['react-hot', 'babel'],
              include: path.join(__dirname, 'src')
            },
            {
              test: /\.css/,
              loaders: ['style', 'css', 'cssnext']
            },
            {
              test: /\.(png|jpg|gif)$/,
              loader: 'url-loader?limit=32768'
            },
            {
              test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              loader: 'url-loader?limit=10000&minetype=application/font-woff'
            },
            {
              test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              loader: 'file-loader'
            },
            {
              include: /\.json$/,
              loaders: ['json-loader']
            }
        ]
    }
}
