// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title:'Nuxt app',
            meta:[
                { name: 'description', content: 'This is Nuxt app'},
            ],
            link: [
                { type: 'icon/image' },
            ],
        },
    },
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
})
