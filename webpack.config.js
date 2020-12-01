const path = require(`path`);
const HTMLWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const {CleanWebpackPlugin} = require(`clean-webpack-plugin`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const OptimizeCssAssetWebpackPlugin = require(`optimize-css-assets-webpack-plugin`);
const TerserWebpackPlugin = require(`terser-webpack-plugin`);
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");

const isAnalyze = process.env.NODE_ENV === 'analyze';
const isDev = process.env.NODE_ENV === `development`;
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: `all`,
    },
  };

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ];
  }
  return config;
};

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: `./src/index.html`,
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, `src/assets`),
          to: path.resolve(__dirname, `public/assets`),
        }
      ]
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `[name].css`,
      chunkFilename: `[id].css`
    }),
  ];

  if (isAnalyze) {
    base.push(new BundleAnalyzerPlugin());
  }

  return base;
};

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },

  plugins: plugins(),

  optimization: optimization(),

  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: true,
    inline: true,
    port: 1337,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.(tsx|ts)?$/,
        use: {
          loader: `ts-loader`
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              name: `[name].css`,
            }
          },
          `css-loader`,
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          isDev ? `style-loader` : MiniCssExtractPlugin.loader,
          `css-loader`,
          `sass-loader`,
        ],
      },
      {
        test: /\.(png|jpg|gif|webp|svg)$/,
        loader: `file-loader`,
        options: {
          name: 'images/[name].[ext]',
        }
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        loader: `file-loader`,
        options: {
          name: 'fonts/[name].[ext]',
        }
      }
    ],
  },

  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `json`]
  },

  devtool: isDev ? `source-map` : false,
};
