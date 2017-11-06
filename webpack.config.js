const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const routes = require('./routes.js');

var imageLoaders = [{
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: '[name].[ext]'
  }
}];
if (process.env.NODE_ENV === 'production' && !process.env.NO_IMG) {
  imageLoaders.push({
    loader: 'image-webpack-loader',
    options: {
      gifsicle: {
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      pngquant: {
        quality: '100',
        speed: 4
      },
      mozjpeg: {
        progressive: true,
        quality: 100
      }
    }
  });
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js',
  },
  resolve: {
    extensions: ['*', '.jpg', '.png', '.gif', '.json'],
    alias: {
      'static': path.resolve(__dirname, './static')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: process.env.NODE_ENV === 'production',
          preserveWhitespace: false,
          postcss: [
            require('autoprefixer')({
              browsers: ['last 3 versions']
            })
          ],
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.styl$/,
        loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
      },
      {
        test: /\.(png|gif|jpg|cur|ico)$/i,
        loaders: imageLoaders,
      },
      {
        test: /\.(ttf|eot|svg|otf|txt|xml|json|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new CleanWebpackPlugin('dist'),
    new ExtractTextPlugin({
      filename: 'common.[chunkhash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'head',
      chunksSortMode: 'dependency',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      },
      mangle: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new PrerenderSpaPlugin(
      // Absolute path to compiled SPA
      path.join(__dirname, './dist'),
      routes.appRoutes,
      {
        phantomPageSettings: {
          javascriptEnabled: true,
          loadImages: true
        }
      }
    )
  ]);
}
