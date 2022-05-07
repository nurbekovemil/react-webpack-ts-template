import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export const mode = 'development'
export const devtool = 'eval-cheap-module-source-map'
export const devServer = {
  hot: true,
  open: true,
}
export const plugins = [new ReactRefreshWebpackPlugin()]
