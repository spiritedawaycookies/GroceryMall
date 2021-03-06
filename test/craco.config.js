const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#78c2ad',
              '@link-color': '#5c5c5c',
              '@success-color': '#56cc9d',
              '@warning-color': '#ffce67',
              '@error-color': '#ff7851',
              '@border-radius-base': '6px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};