<template>
    <h1 class="bg-success-100">Home page</h1>
    <p>{{ counter.count }}</p>
    <button @click="counter.increase()">+</button>
</template>

<script setup>
    import { useCounterStore } from '@/stores/counter';

    useHead({
        title: 'Nuxt | app'
    });

    const counter = useCounterStore();

</script>

<style scoped>
</style>