<template>
    <h1 class="bg-success-100">Grid page</h1>
    <Grid :maxHeight="500" :column="column" urlAPI="/api/user/"></Grid>
</template>

<script setup lang="ts">
import Grid  from '@/components/grid/index.vue';

definePageMeta({
  layout: "blank",
});

const column = ["id", "name", "age", "address"];
</script>

<style scoped>
</style>