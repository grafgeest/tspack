module.exports = {
  devtool: 'inline-source-map',
  entry: './app/boot.ts',
  output: {
    filename: 'dist/bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
  },
  module: {
    loaders: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
      // all files with a `.ts` extension will be handled by `ts-loader`
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
