<template>
    <Head>
        <Meta></Meta>
        <Title>ABC</Title>
    </Head>
    <p>This is product page</p>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="item in products">
            <ProductCard :product="item"></ProductCard>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { User } from '~~/types/user';

    const { data: products } = await useFetch('https://fakestoreapi.com/products');
    const a: User = {
        name: '',
        age:1,
        title:''
    };
</script>