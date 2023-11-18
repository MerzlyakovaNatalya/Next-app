/** @type {import('next').NextConfig} */
// const NextFederationPlugin = require('@module-federation/nextjs-mf')
const nextConfig = {
  reactStrictMode: true,
  // webpack(config, options) {
  //   config.plugins.push(
  //     new NextFederationPlugin({
  //       name: 'host_next',
  //       filename: 'static/chunks/remoteEntry.js',
  //       remotes: {
  //         host: 'host@http://react-webpack-type-script.vercel.app/remoteEntry.js',
  //       },
  //       shared: {},
  //     })
  //   )
  //   return config
  // },
}

module.exports = nextConfig
