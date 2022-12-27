const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'auto' // By default, publicPath is set to 'auto' in Webpack 5.
  },
  mode: 'development',
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
      title: 'Hello world',
      description: 'something...',
      template: 'src/index.hbs',
      // filename: 'subfolder/custom.html',
    })
  ]
};