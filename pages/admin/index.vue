<template>
    <div class="background">
        <div class="background-mode rounded-xl overflow-hidden grid grid-cols-12 shadow-md w-full">
            <Menubar class="col-span-2"></Menubar>
            <Dashboard class="col-span-10"></Dashboard>
        </div>
    </div>
</template>

<script setup>
    import Menubar from '@/components/admin/Menubar.vue';
    import Dashboard from '@/components/admin/Dashboard.vue';

    definePageMeta({
        layout: 'blank'
    });
</script>

<style scoped>
    .background {
        @apply h-screen w-screen p-6;
        background-image: url('../../assets/images/bg.avif');
    }
</style>