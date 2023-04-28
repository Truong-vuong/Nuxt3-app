<template>
  <div
    class="notify__content animation"
    :style="{ width: `${width}px`, height: `${height}px` }"
  >
    <h2>{{ text }}</h2>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  timeout: {
    type: Number,
    default: 6000,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  text: {
    type: String,
  },
});

const { $bus } = useNuxtApp();
const active = ref(true);
const timeout: number = props.timeout;
onMounted(() => {
  active.value = true;
  if (props.timeout) {
    setTimeout(() => {
      if (active.value) {
        $bus.$emit("close");
        active.value = false;
      }
    }, props.timeout);
  }
});
const onCloseClick = () => {
  active.value = false;
  $bus.$emit("close");
};

const handleTimeout = (timeout: number) => {
  setTimeout(() => {
    $bus.$emit("timeout", () => 1);
  }, timeout * 1000);
};

watch(() => timeout, (val) => {
  if(val) {
    handleTimeout(val);
  }
}, { immediate: true })

</script>

<style scoped>
/* Notify Plugin style */
.notify__content {
  @apply fixed top-0 right-0 bg-primary-cta-5;
}

@keyframes transform-left {
  from {
    transform: translateX(8px);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes circle-reveal {
  0% {
    opacity: 0;
    clip-path: circle(10px at 100% 50%);
  }
  75% {
    opacity: 1;
  }
  100% {
    clip-path: circle(250px at center);
  }
}

.animation {
  animation: transform-left 0.5s ease-in-out, circle-reveal 0.3s ease-in-out;
  transition: all;
}
</style>
