<template>
    <div>
      <div class="flex items-center">
        <div>
          <h1 class="text-2xl font-bold">Dashboard</h1>
          <p class="text-base text-gray-dark">Detail information about your store</p>
        </div>
        <div class="flex items-center justify-between p-2 bg-white rounded-3xl w-[180px] h-5">
          <SvgIcon :path="iconSearch" class="w-5"></SvgIcon>
          <input type="text" class="w-[140px] h-5">
        </div>
        <div>
          <SvgIcon :path="iconDownLoad" class="w-5"></SvgIcon>
        </div>
        <div>
          <img src="" alt="" width="24" height="24">
        </div>
        <div>
          <ColorMode></ColorMode>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>