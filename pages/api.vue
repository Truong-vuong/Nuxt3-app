<script setup>
definePageMeta({
  layout: "blank",
});


//const { data: product, pending, error, refresh } = await useAsyncData('product', () => $fetch('/api/product'), { lazy: true});

//onst { data: product, pending, error, refresh } = await useLazyAsyncData('product', () => $fetch('/api/product'));


const { data: user } = await useFetch('/api/user/', { key: 'user' });

//const { pending, data: user } = await useLazyFetch('/api/user/');

const { data: nuxtUser } = useNuxtData('user');
console.log("nuxt user", nuxtUser)

</script>
<template>
  <section class="product">
    <button @click="navigateTo('/composables')">composable</button>
    <div v-for="item in product" class="">
      <span>{{ item.id }}</span>. <span>{{ item.title }}</span>
    </div>
  </section>
  <section class="user">
    <button @click="navigateTo('/composables')">composable</button>
    <div v-for="item in user" class="">
      <span>{{ item.id }}</span>. <span>{{ item.name.firstname }}</span>
    </div>
  </section>
</template>