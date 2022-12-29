const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'hello-world': './src/hello-world.js',
    'react': './src/react.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'auto' // By default, publicPath is set to 'auto' in Webpack 5.
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024 // 2kb
          }
        }
      },
      {
        test: /\.txt$/,
        type: 'asset/source'
      },
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                [
                  // for more information, see: https://babeljs.io/docs/en/babel-plugin-transform-typescript
                  '@babel/plugin-transform-typescript',
                  {
                    // specify more options here
                  }
                ],
              ]
            },
          },
        ]
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin({
      // default: ['**/*']
      cleanOnceBeforeBuildPatterns: [
        '**/*',
      ]
    }),
    new HtmlWebpackPlugin({
      filename: './hello-world.html',
      chunks: ['hello-world'],
      title: 'Hello world',
      description: 'hello world!',
      template: './src/page-template.hbs',
      minify: false, // will be 'true' if mode is 'production'
    }),
    new HtmlWebpackPlugin({
      filename: './react.html',
      chunks: ['react'],
      title: 'React',
      description: 'react!',
      template: './src/page-template.hbs',
      minify: false,
    }),
  ]
};