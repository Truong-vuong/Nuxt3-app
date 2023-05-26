<script setup>
const url = useRequestURL()
</script>
<template>
  <p>URL comonent is: {{ url }}</p>
  <p>Path comonent is: {{ url.pathname }}</p>
</template>