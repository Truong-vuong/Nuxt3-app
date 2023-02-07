<template>
    <div class="bg-success-60">
        <p>{{ error.statusCode }}</p>
        <p>{{ error.message }}</p>
        <button @click="handelClearError">Go home</button>
    </div>
</template>

<script setup>
    defineProps(['error']);

    const handelClearError = () => clearError({ redirect: '/', fatal: true});
</script>

<style scoped>
</style>