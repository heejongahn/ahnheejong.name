const axios = require('axios')
const S3_BASE_PATH = 'https://s3.ap-northeast-2.amazonaws.com/ahnheejong.name-articles'

const title = 'ahn [at] 🇰🇷'
const url = 'http://ahnheejong.name'

const meta = {
  'og:locale': 'ko_kR',
  'og:site_name': 'ahj [at] 🇰🇷',
  'og:title': title,
  'og:image': 'http://ahnheejong.name/logo.png',
  'og:image:type': 'image/png',
  'og:image:width': '1200',
  'og:image:height': '630',
  'og:url': url,
  'twitter:site': '@heejongahn',
  'twitter:title': title,
  'twitter:description': '👋',
  'twitter:url': url,
  'twitter:card': 'summary_large_image',
  'twitter:image': 'http://ahnheejong.name/logo.png',
  'twitter:creator': 'ahn heejong'
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'about [dot] ahj [at] 🇰🇷',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '👋' },
      ...Object.keys(meta).map(name => ({
        hid: name,
        name,
        content: meta[name]
      }))
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/i.png' }
    ]
  },
  css: [
    { src: '~assets/style.scss', lang: 'scss' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  generate: {
    routes: function () {
      return axios(`${S3_BASE_PATH}/index.json`, { responseType: 'json' })
      .then(r => {
        return r.data.map(article => {
          const route = {
            route: `/articles/${article.slug}`,
            payload: article
          }
          return route
        })
      })
    }
  },
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['@nuxtjs/google-analytics', {
      ua: 'UA-102906433-1',
      id: 'UA-102906433-1'
    }]
  ]
}
