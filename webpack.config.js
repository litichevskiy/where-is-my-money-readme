const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_DEVELOPMENT = NODE_ENV === 'development';

module.exports = {
  mode: NODE_ENV,
  devtool: IS_DEVELOPMENT ? 'inline-cheap-module-source-map' : false,
  entry: {
    bundle: ['./src/js/index.js'],
    style: ['./src/styles/index.scss']
  },
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "../styles/[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  resolve: {
    extensions: ['.js', 'css', 'scss'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          type: 'asset/resource',
          outputPath: '../images'
        }
      },
      // {
      //   test: /\.(js)?$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //   },
      // },
    {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEVELOPMENT
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEVELOPMENT,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: IS_DEVELOPMENT,
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      stage:2
                    },
                  ],
                ],
              },
            }
          },
        ],
      }
    ]
  }
}