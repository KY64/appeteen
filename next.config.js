const Workbox = require('next-workbox-webpack-plugin')

module.exports = {
    webpack: (config, {isServer, dev, buildId, config: {distDir}}) => {
        if(!isServer && !dev) {
            config.plugins.push(new Workbox({
                distDir,
                buildId
            }))
        }

        return config
    }
}