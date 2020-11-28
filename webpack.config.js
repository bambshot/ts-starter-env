module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: './src/index.ts',
  output: {
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
};