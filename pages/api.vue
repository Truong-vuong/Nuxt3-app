<script setup>
definePageMeta({
  layout: "blank",
});
const { data } = await useAsyncData('count', () => $fetch('/api/product/'))
</script>
<template>
  Page visits: {{ data }}
</template>