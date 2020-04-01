const path = require('path');

export default {
    mode: 'spa',
    resolve: {
        extensions: ['.js', '.json', '.vue', '.ts'],
        alias: {
            '@': path.resolve(__dirname),
            '~': path.resolve(__dirname),
        },
    },
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        { src: '~/assets/common.scss', lang: 'scss' },
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        '@nuxtjs/style-resources',
        'vue-sweetalert2/nuxt',
        ['nuxt-fontawesome', {
            imports: [
                {
                    set: '@fortawesome/free-solid-svg-icons',
                    icons: ['fas'],
                },
            ],
        }],
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {},
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        },
    },
    styleResources: {
        scss: [
            '~/assets/variables.scss',
        ],
    },
};
