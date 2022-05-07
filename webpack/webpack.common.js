import { resolve as _resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export const entry = _resolve(__dirname, '../src/index.tsx')
export const output = {
  path: _resolve(__dirname, '..', 'build'),
  filename: 'bundle.js',
}
export const resolve = {
  extensions: ['.tsx', '.ts', '.js'],
}
export const module = {
  rules: [
    {
      test: /\.(tsx|ts|js)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
        },
      ],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(svg|png|jpg|jpeg)$/,
      type: 'asset/resource',
    },
  ],
}
export const plugins = [
  new HtmlWebpackPlugin({
    template: _resolve(__dirname, '../src/index.html'),
  }),
]
