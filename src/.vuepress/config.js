module.exports = {
  dest:'docs',
  base:'/Docs-Dh-WeB/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  lang: 'es',
  title: 'Docs Dh-WeB',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Sitio web Programación' ,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { charset: 'UTF-8'}]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guía',
        link: '/',
      },
    ],
    sidebar: [
      '/',
      '/01-Html-Básico/'
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
