const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const listOfPages = [
  {
    name: 'hello-world',
    title: 'Hello world',
    description: 'hello world!'
  },
];

const entries = listOfPages.reduce((entries, page) => {
  const { name } = page;

  entries[name] = path.resolve(__dirname, `./src/${name}.js`);

  return entries;
}, {});

const htmlGenerators = listOfPages.reduce((listOfHtmls, page) => {
  const { name, title, description } = page;

  listOfHtmls.push(new HtmlWebpackPlugin({
    filename: `./${name}.html`,
    title: title,
    description: description,
    template: './src/page-template.hbs',
    minify: false,
  }));

  return listOfHtmls;
}, []);

module.exports = {
  entry: entries,
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/static/' // By default, publicPath is set to 'auto' in Webpack 5.
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  module: {
    rules: [
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
    ...htmlGenerators,
  ]
};