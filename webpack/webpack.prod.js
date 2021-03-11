const merge = require('webpack-merge').default;

const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'production',
  entry: './src/lib/theme.tsx',
  output: {
    filename: 'material-ui-theme.js',
    path: path.resolve(__dirname, 'dist'),
  },
});
