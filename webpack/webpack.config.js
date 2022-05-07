import { merge } from 'webpack-merge'
import commonConfig from './webpack.common.js'

export default ({ env }) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return merge(commonConfig, require(`./webpack.${env}.js`))
}
