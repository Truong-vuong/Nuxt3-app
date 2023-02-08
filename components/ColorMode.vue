<template>
    <div>
        <Icon @click="() =>darkMode = false" :class="darkMode ? 'block' : '!hidden'" name="uil:sun" size="22"/>
        <Icon @click="() =>darkMode = true" :class="darkMode ? '!hidden' : 'block'" value="dark" name="uil:moon" size="22"/>
    </div>
</template>
  
<script setup>
    const colorMode = useColorMode();
    const darkMode = ref(false);
    watch((darkMode), (val) => {
      if(val) {
        colorMode.preference = 'dark';
        colorMode.value = 'dark';
      } else {
        colorMode.preference = 'system';
        colorMode.value = 'light';
      }
    });
</script>
  
<style>
    .background-mode  {
      @apply bg-gray-lighter text-gray-darkest;
    }
    .dark-mode .background-mode  {
      @apply bg-gray-darkest text-gray-lighter;
    }
</style>
  