import HtmlWebpackPlugin from 'html-webpack-plugin'
import {CleanWebpackPlugin} from 'clean-webpack-plugin'

export default
{
  entry:'./src/index.js',
  module:
  {
    rules:
    [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use:
        {
          loader: 'babel-loader'
        }
      }
    ]
  },
  node:
  {
    fs:'empty'
  },
  plugins:
  [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin
    (
      {
        template:'./src/public/index.html'
      }
    )
  ]
}
