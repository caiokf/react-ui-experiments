const path = require('path')

module.exports = function override(config) {
  //do stuff with the webpack config...
  // if(config && config.resolve && config.resolve.alias) {
  //   config.resolve.alias['joi'] = 'joi-browser'
  // }
  if(config && config.resolve) {
    const srcPath = path.resolve(__dirname, 'src')
    if (config.resolve.modules && config.resolve.modules.constructor === Array) {
      config.resolve.modules.push(srcPath)
    } else {
      config.resolve.modules = [srcPath, 'node_modules']
    }
  }
  return config
}
