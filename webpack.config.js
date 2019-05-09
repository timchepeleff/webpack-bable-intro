const {join} = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: join(__dirname, 'dist/'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  }
}
