const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports =
  {

    entry: './src',

    output: {
      path: '/dist',
      filename: 'react-scrollbar.js',
      library: 'react-scrollbar',
      libraryTarget: 'umd',
    },

    externals: {
      react: 'react',
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
        },
        {
          test: /\.s[a|c]ss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
        }
      ],
    },
    plugins: [new ExtractTextPlugin("doc/examples")],

    resolve: {
      extensions: ['.js', '.jsx', '.scss', '.css'],
      alias: {
        'react-scrollbar-js': path.resolve(__dirname, 'src/'),
      },
    },

    devtool: 'source-map',

    devServer: {
      contentBase: path.resolve(__dirname, 'example/public'),
      publicPath: '/build/',
      clientLogLevel: 'none',
//    inline: true,
//    hot: true
    },

  };
