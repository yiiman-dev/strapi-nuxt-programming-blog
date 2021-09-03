import webpack from "webpack"

const strapiBaseUri = process.env.API_URL || "http://192.168.1.101:1337";
const port = process.env.NUXT_PORT || 5000;
const host = process.env.NUXT_HOST || '0.0.0.0';

export default {
  target: "server",
  buildDir: 'nuxt-dist',
  ssr: true,
  server: {
    port: port,
    host: host
  },
  build: {
    // analyze: true,
    babel: {
      presets({isServer}) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: {version: 3}
            }
          ]
        ]
      }
    },
    extractCSS: true,
    vendor: ['jquery', 'bootstrap', 'theme'],
    plugins: [

      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        'window.jQuery': 'jquery',
        'window.jquery': 'jquery',
        'window.$': 'jquery',
      })
    ]
  },
  env: {
    API_URL: strapiBaseUri,
    NUXT_PORT: port,
    NUXT_HOST: host
  },
  head: {
    script: [
      // {src: "/js/common-theme.js"},
      // {src: "/js/jquery.nice-select.js"},
      // {src: "/js/owl-carousel/owl.carousel.min.js"},
      // {src: "/js/magnific-popup/jquery.magnific-popup.min.js"},
      // {src: "/js/counter/counter.js"},
      // {src: "/js/isotope/isotope.pkgd.min.js"},
      // {src: "/js/particles.min.js"},
      // {src: "/js/vivus/pathformer.js"},
      // {src: "/js/vivus/vivus.js"},
      // {src: "/js/raindrops/jquery-ui.js"},
      // {src: "/js/raindrops/raindrops.js"},
      // {src: "/js/countdown/jquery.countdown.min.js"},
      // {src: "/js/contact-form/contact-form.js"},
      // {src: "https://maps.googleapis.com/maps/api/js"},
      // {src: "/js/map.js"},
      {src: "/js/wow.min.js"},
      // {src: "/js/color-customize/color-customizer.js"},
      // {src:"/js/main.js",type: 'module', defer: true},
    ],
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Staatliches",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    '@assets/global/sass/bootstrap.sass',
    '@assets/global/sass/animate.sass',
    '@assets/global/sass/fontawesome-all.sass',
    '@assets/global/sass/line-awesome.min.sass',
    '@assets/global/sass/magnific-popup.sass',
    '@assets/global/sass/base.sass',
    '@assets/global/sass/shortcodes.sass',
    '@assets/global/sass/style.sass',
    '@assets/global/sass/responsive.sass',
    '@assets/global/sass/color-customizer.sass',
  ],
  plugins: [
    '~plugins/theme.js',
    "~/plugins/lightGallery.js"
  ],


  modules: [
    "@nuxtjs/markdownit",
    "@nuxtjs/strapi",
    // 'bootstrap-vue/nuxt',
    ['@nuxtjs/i18n',
      {
        locales: [
          {
            name: "English",
            code: "en",
            iso: "en-US",
            file: "en.js",
            layout: "ltr"
          },
          {
            name: "فارسی",
            code: "fa",
            iso: "fa-IR",
            file: "fa.js",
            layout: "rtl"
          }
        ],
        langDir: "languages/",
        defaultLocale: "en"
      }
    ],
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',

  ],

  strapi: {
    url: strapiBaseUri,
    entities: [
      {
        name: "articles",
        type: "collection",
      },
      {
        name: "categories",
        type: "collection",
      },
      {
        name: "project_cateories",
        type: "collection",
      },

      {
        name: "companies",
        type: "collection"
      },
      {
        name: "projects",
        type: "collection"
      },
      {
        name: "services",
        type: "collection"
      },

      {
        name: "testimotionals",
        type: "collection"
      },
      {
        name: "pages",
        type: "collection"
      },
      {
        name: "menus",
        type: "collection"
      },


      {
        name: "homepage",
        type: "single",
      },
      {
        name: "global",
        type: "single",
      },
      {
        name: "project_categories_page",
        type: "single",
      },

      {
        name: "blogpage",
        type: "single",
      },
      {
        name: "projectpage",
        type: "single",
      },
    ],
  },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs',
      'markdown-it-abbr',
      'markdown-it-container',
      'markdown-it-deflist',
      'markdown-it-emoji',
      'markdown-it-footnote',
      'markdown-it-ins',
      'markdown-it-mark',
      'markdown-it-sub',
      'markdown-it-sup',
    ]
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          locales: {
            url: '/i18n/locales',
            method: 'get',
            propertyName: false
          }
        },
        tokenRequired: false,
        tokenType: false
      }
    }
  },
  axios: {
    credentials: true
  },
};
