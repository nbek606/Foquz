module.exports = {  
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/main.scss";
        `,
      },
    },
  },

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('svg-vue3-loader')
      .loader('svg-vue3-loader');
  }
}