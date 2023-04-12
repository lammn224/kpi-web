import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',
  loading: false,

  server: {
    port: 8000,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - KPI',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/nutrium-logo.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Mulish:300,400,500,600,700|Roboto:300,400,500,600,700|Material+Icons',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/sass/plugins.scss', '~/assets/sass/style.vue.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bus',
    '~/plugins/vue-inline-svg',
    '~/plugins/vue2-perfect-scrollbar',
    '~/plugins/vee-validate',
    '~/plugins/bootstrap-notify',
    '~/plugins/axios',
    '~/plugins/chart',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    '~/components/layout',
    '~/components/layout/header',
    '~/components/layout/footer',
    '~/components/layout/extras',
    '~/components/layout/extras/dropdown',
    '~/components/layout/extras/offcanvas',
    '~/components/layout/aside',
    '~/components/layout/brand',
    '~/components/features',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    // '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    // '@nuxt/components',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  env: {
    baseUrl: process.env.BASE_URL,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL,
  },

  // auth: {
  //   plugins: ['~/plugins/auth.js'],
  //   redirect: {
  //     login: '/login',
  //     logout: '/login',
  //     callback: '/login',
  //     home: '/',
  //   },
  //   strategies: {
  //     localUser: {
  //       scheme: 'local',
  //       token: {
  //         property: 'access_token',
  //         global: true,
  //         // required: true,
  //         // type: 'Bearer'
  //       },
  //       user: {
  //         property: '',
  //         // autoFetch: true
  //       },
  //       endpoints: {
  //         login: { url: '/auth/login', method: 'post' },
  //         logout: { url: '/auth/logout', method: 'post' },
  //         user: { url: '/school-users/me', method: 'get' },
  //       },
  //     },
  //
  //     localStudent: {
  //       scheme: 'local',
  //       token: {
  //         property: 'access_token',
  //         global: true,
  //         // required: true,
  //         // type: 'Bearer'
  //       },
  //       user: {
  //         property: '',
  //         // autoFetch: true
  //       },
  //       endpoints: {
  //         login: { url: '/auth/login/students', method: 'post' },
  //         logout: { url: '/auth/logout', method: 'post' },
  //         user: { url: '/students/me', method: 'get' },
  //       },
  //     },
  //   },
  // },
  //
  router: {
    // middleware: ['auth'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = 'source-map'
      }
    },
  },
}
