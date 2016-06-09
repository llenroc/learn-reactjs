const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merg = require('webpack-merge');
const validate = require('webpack-validator');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo'
    })
  ]
};

var config;

switch(process.env.npm_lifecycle_event) {
  case 'build':
    config = merg(common, {});
    break;
  default:
    config = merge(common, {});
}

module.exports = validate(config);
