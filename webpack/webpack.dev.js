const merge = require('webpack-merge').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'development',
  entry: './example/index.tsx',
  devServer: {
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Material UI Theme',
      template: 'public/index.html',
    }),
  ],
});
