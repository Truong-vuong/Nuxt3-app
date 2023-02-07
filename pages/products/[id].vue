<template>
    <nuxt-link to="/">Back to home</nuxt-link>
    <div>
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
    </div>
</template>

<script setup>
    const  { id }  = useRoute().params;
    const uri = `https://fakestoreapi.com/products/${id}`;
    const { data: product } = await useFetch(uri);
    if(!product.value) {
        throw createError({ statusCode: 400, message: 'Product not found'});
    };
</script>