const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
  const publicPath = env.WEBPACK_SERVE ? '/' : '/daniels-calculator'
  return {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    devServer: { static: './docs', historyApiFallback: true },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
        },
      ],
    },
    resolve: { extensions: ['.tsx', '.ts', '.js'] },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'docs'),
      publicPath,
    },
    plugins: [
      new webpack.DefinePlugin({ WEBPACK_SERVE: env.WEBPACK_SERVE }),
      new HtmlWebpackPlugin({
        title: 'It Worked',
        template: 'src/index.html',
        publicPath,
      }),
    ],
    optimization: { runtimeChunk: 'single' },
  }
}
