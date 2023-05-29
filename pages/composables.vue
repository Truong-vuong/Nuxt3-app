<template>
  <h1>Composables</h1>
  <button @click="navigateTo('/api')">api</button>
  <UseCookie></UseCookie>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "blank",
});

useHead({
  title: "My composables page",
  meta: [
    {
      name: "description",
      content: "My page description",
    },
  ],
});

useHeadSafe({
  script: [
    { id: 'xss-script', innerHTML: 'alert("xss")' }
  ],
  meta: [
    { 'http-equiv': 'refresh', content: '0;javascript:alert(1)' }
  ]
})
useSeoMeta({
  title: 'My Abc Site',
  ogTitle: 'My Abc Site',
  description: 'This is my Abc site, let me tell you all about it.',
  ogDescription: 'This is my Abc site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});

useServerSeoMeta({
  title: 'My Def Site',
  ogTitle: 'My Def Site',
  description: 'This is my Def Site, let me tell you all about it.',
  ogDescription: 'This is my Def Site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
const appConfig = useAppConfig();
// console.log("init", appConfig.color.mainColor)
// appConfig.color.mainColor = "000000";
// console.log("change", appConfig.color.mainColor)

const nuxtApp = useNuxtApp();
//console.log("nuxt app", nuxtApp)


// Get underlying request event
const event = useRequestEvent()
// Get the URL
const url = event?.node?.req?.url;
console.log("url", url)

// Get all request headers
const headers = useRequestHeaders()
// Get only cookie request header
const headersC = useRequestHeaders(['cookie'])

const config = useRuntimeConfig()
console.log("config", config)

</script>
