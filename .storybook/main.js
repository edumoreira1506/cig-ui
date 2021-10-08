const path = require('path')

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: (config) => {
    config.resolve.alias['swiper/react'] = path.resolve(__dirname, '../', 'node_modules', 'swiper', 'react', 'swiper-react');
    config.resolve.alias['swiper'] = path.resolve(__dirname, '../', 'node_modules', 'swiper', 'swiper.esm');
    config.resolve.alias['ssr-window'] = path.resolve(__dirname, '../', 'node_modules', 'ssr-window', 'ssr-window.esm');
    config.resolve.alias['dom7'] = path.resolve(__dirname, '../', 'node_modules', 'dom7', 'dom7.esm');

    return config;
  },
}
