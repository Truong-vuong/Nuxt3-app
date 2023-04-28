<template>
    <main class="bg-background-10 flex justify-center items-center w-screen h-screen">
        <div class="spectrum-background">
            <div>
                <img src="../assets/images/join.jpg" alt="" class="rounded-3xl max-w-full">
            </div>
            <div class="p-2 flex flex-col items-center mt-5 text-center">
                <h1 class="text-3xl font-bold">Discover your dream job here</h1>
                <p class="text-base mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.  amet nemo eius, labore eos in! Velit!</p>
                <div class="border border-white my-10 flex rounded bg-background px-5 py-2">
                    <button class=" bg-white">Register</button>
                    <button>Sigin</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'blank'
    });
</script>

<style scoped lang="scss">
    .spectrum-background {
        @apply max-w-[340px] max-h-[740px] rounded-3xl p-2 border-2 border-white;
        background:
            linear-gradient( #D0D4E3, transparent),
            linear-gradient(to top left, blue, transparent),
            linear-gradient(to top right, #BCC5D2, transparent);
        background-blend-mode: screen;
    }
</style>