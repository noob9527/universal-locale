const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'universal-locale': './index.ts',
    'universal-locale.min': './index.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    library: 'UniversalLocale',
    libraryTarget: 'umd',
    filename: '[name].js',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'dist/bundles')
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
      include: /\.min\.js$/,
    })
  ],
};