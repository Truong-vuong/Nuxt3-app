<template>
    <div class="bg-transparent w-full h-full p-5">
        <div>
            <AdminOverview v-if="activeStore.tabActive === 'Overview'"></AdminOverview>
            <AdminOrder v-if="activeStore.tabActive === 'Order'"></AdminOrder>
            <AdminProducts v-if="activeStore.tabActive === 'Products'"></AdminProducts>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useAdminStore } from '@/stores/admin';

    const activeStore = useAdminStore();
</script>

<style scoped></style>