module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    {src:'~/plugins/element-ui',ssr:true}
  ],
  //全局css
  css:[
    {src:'~assets/css/base.css'},
    {src:'element-ui/lib/theme-chalk/index.css'}
  ],
  /*
  ** Build configuration
  */
  build: {
    /*关闭ESLint
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
    vendor: [
      'axios',
      'element-ui'
    ],
    postcss: [
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ]
  }
}

