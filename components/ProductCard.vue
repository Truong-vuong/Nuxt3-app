<template>
    <div class="bg-gray-light">
        <img :src="`${product.image}`" alt="">
        <p>{{ product.title }}</p>
        <button><NuxtLink :to="`/products/${product.id}`">View details</NuxtLink></button>
    </div>
</template>

<script setup>
    const { data: product } = defineProps(['product'])
</script>

<style scoped>
</style>