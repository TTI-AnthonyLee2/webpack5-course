const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/react.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/static/' // By default, publicPath is set to 'auto' in Webpack 5.
  },
  mode: 'development',
  devServer: {
    port: 9002,
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    devMiddleware: {
      index: 'react.html',
      writeToDisk: true,
    },
    hot: true, // Seems to be enabled by default (?)
  },
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
        test: /\.(c|sc|sa)ss$/,
        use: [
          'style-loader',
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
    new CleanWebpackPlugin({
      // default: ['**/*']
      cleanOnceBeforeBuildPatterns: [
        '**/*',
      ]
    }),
    new HtmlWebpackPlugin({
      filename: './react.html',
      title: 'React',
      description: 'react!',
      template: './src/page-template.hbs',
      minify: false,
    }),
  ]
};