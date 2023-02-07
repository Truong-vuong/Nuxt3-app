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

<script setup>
    const { data: products } = await useFetch('https://fakestoreapi.com/products');
</script>