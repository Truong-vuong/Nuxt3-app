<template>
    <h1>About page</h1>
    <p>{{ data }}</p>
</template>

<script setup>
    definePageMeta({
        layout: 'blank'
    });

    const { data: data } = await useFetch('/api/ninja?name=vuongtruong', {
        method: 'POST',
        body: { name: 'vương', age:25}
    })
</script>

<style scoped>
</style>