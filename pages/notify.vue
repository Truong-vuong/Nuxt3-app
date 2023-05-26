<template>
  <main class="w-screen h-screen flex justify-center items-center">
    <section class="w-3/4 h-3/4 flex justify-center items-center space-x-5">
      <button class="bg-success-80" @click="successNotify">success</button>
      <button class="bg-warning-80" @click="warningNotify">warning</button>
      <button class="bg-error-80" @click="errorNotify">error</button>
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "blank",
});

const { $notify } = useNuxtApp();

const successNotify = () => {
  $notify({
    text: `This is successNotify element`,
    timeout: 0,
    width: 200,
    height: 80,
    type: "success",
  });
};
const warningNotify = () => {
  $notify({
    text: `This is warningNotify element`,
    timeout: 3,
    width: 200,
    height: 80,
    type: "warning",
  });
};
const errorNotify = () => {
  $notify({
    text: `This is errorNotify element`,
    timeout: 8,
    width: 200,
    height: 80,
    type: "error",
  });
};
const useNotify = useShowNotify();
</script>

<style scoped>
button {
  @apply rounded p-2 border-secondary-nav-100 border-solid min-w-[80px] font-semibold;
}
</style>
