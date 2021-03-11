const path = require('path');
const merge = require('webpack-merge').default;

const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'production',
  entry: './src/lib/theme.tsx',
  output: {
    filename: 'material-ui-theme.js',
    path: path.resolve(__dirname, '..', 'dist'),
    library: 'material-ui-theme',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  optimization: {
    usedExports: true,
    sideEffects: false,
  },
  externals: {
    react: 'commonjs react',
    '@material-ui/core': 'commonjs2 @material-ui/core',
  },
});
