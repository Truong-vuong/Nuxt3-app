<template>
  <div id="app">
    <div>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore.
    </div>
    <Animations>
      <div v-if="expanded">
        Magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita.
      </div>
    </Animations>
    <button @click="expanded = !expanded">
     aaaaaa
    </button>
  </div>
</template>

<script setup>
import { Animations } from '~~/.nuxt/components';

const expanded = ref(false);
</script>