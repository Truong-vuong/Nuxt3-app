<script setup>
import Url from '~/components/composables/url.vue';

definePageMeta({
  layout: "blank",
});
const url = useRequestURL()
</script>
<template>
  <p>URL is: {{ url }}</p>
  <p>Path is: {{ url.pathname }}</p>
  <Url></Url>
</template>