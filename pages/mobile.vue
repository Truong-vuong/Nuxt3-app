<template>
  <main class="w-screen h-screen flex justify-center items-center">
    <section class="w-3/4 h-3/4 flex justify-center items-center space-x-5">
      <button @click="batteryStatus" class="bg-slate-400">Battery</button>
      <button @click="hadleVibrate" class="bg-slate-400">Vibrate</button>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useBattery } from "@vueuse/core";
import { useVibrate } from "@vueuse/core";
import { useColorMode, useCycleList } from '@vueuse/core';

definePageMeta({
  layout: "blank",
});

const { $notify } = useNuxtApp();
const { charging, chargingTime, dischargingTime, level } = useBattery();
const { vibrate, stop, isSupported } = useVibrate({ pattern: [300, 100, 300] });
const mode = useColorMode({
  emitAuto: true,
  modes: {
    contrast: 'dark contrast',
    cafe: 'cafe',
  },
});
const { state, next } = useCycleList(['cafe', 'contrast',], { initialValue: mode })

const batteryStatus = () => {
  $notify({
    timeout: 6,
    text: `Your battery is ${level.value * 100}%`,
    type: "success",
  });
};
const hadleVibrate = () => {
  if (isSupported) {
    vibrate();
    setTimeout(() => {
      stop();
    }, 10000);
  }
};

watchEffect(() => mode.value = state.value as any)

onMounted(() => {
    if(level.value > 0.2) {
        state.value = 'contrast'
    }
})
</script>

<style scoped>
button {
  @apply rounded p-2 border-secondary-nav-100 border-solid min-w-[80px] font-semibold;
}
</style>
