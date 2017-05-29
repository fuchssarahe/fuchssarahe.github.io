module.exports = {
  entry: "./lib/portfolio",
  output: {
    path: "./lib/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx" ]
  },
  devtool: 'source-map'
};
