<template>
  <main class="w-screen h-screen flex justify-center items-center">
    <section class="w-3/4 h-3/4">
      <button @click="openNotify">Show 1</button>
      <button @click="openNotify2">Show 2</button>
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "blank",
});

const { $notify } = useNuxtApp();

const openNotify = () => {
  $notify({
    text: `aaaaaa`,
    timeout: 1,
    width: 200,
    height: 40,
  });
};
const openNotify2 = () => {
  $notify({
    text: `bbbbbbb`,
    timeout: 6,
    width: 200,
    height: 40,
  });
};
</script>
