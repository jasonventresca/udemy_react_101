// entry -> output

const path = require('path'); // node.js path library

// this is a node.js thing
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'), // can't use relative paths
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
