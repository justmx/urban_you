const webpack = require('webpack');

module.exports = {
    entry: "./app/assets/frontend/main.js",
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              loader: "babel-loader",
              query:
                {
                  presets: ['es2015', 'react']
                }
           }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
};
