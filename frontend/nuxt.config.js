const strapiBaseUri = process.env.API_URL || "http://localhost:1337";

export default {
  target: "server",
  buildDir: 'nuxt-dist',
  ssr: true,
  build:{
    analyze: true,
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  },
  env: {
    strapiBaseUri,
  },
  head: {
    script: [
      {src: "/js/jquery.min.js"},
      // {src:"/js/modernizr-2.6.2.min.js"},
      {src: "/js/jquery.easing.1.3.js"},
      {src: "/js/bootstrap.min.js"},
      {src: "/js/jquery.waypoints.min.js"},
      {src: "/js/jquery.flexslider-min.js"},
      {src: "/js/sticky-kit.min.js"},
      {src: "/js/jquery.magnific-popup.min.js"},
      {src: "/js/owl.carousel.min.js"},
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
    '@assets/css/animate.css',
    // '@assets/css/flaticon.css',
    // '@assets/css/font-awesome.min.css',
    // '@assets/css/bootstrap.css',
    // '@assets/css/bootstrap.rtl.css',

    '@assets/css/magnific-popup.css',
    '@assets/css/owl.carousel.min.css',
    '@assets/css/owl.theme.default.min.css',
    '@assets/css/flexslider.css',
    '@assets/css/style.css',
  ],
  plugins: [],
  modules: [
    "@nuxtjs/markdownit",
    "@nuxtjs/strapi",
    'bootstrap-vue/nuxt'
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
    // use: [
    //   'markdown-it-div',
    //   'markdown-it-attrs'
    // ]
  },
};
