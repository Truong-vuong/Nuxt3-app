<template>
    <header>
      <h1>NUXT</h1>
      <div class="searchbar">
        <SvgIcon :path="iconSearch" fill="#FF731D" class="w-5"></SvgIcon>
        <input type="text" name="" class="border-main border">
      </div>
      <ul class="menu flex space-x-5">
          <li v-for="item,index in menuBar" :key="`${item}_${index}`">
              <div @click="handleChooseTab(item)">
                  <span :class="item.active ? 'text-secondary-nav-100' : 'text-gray-dark'">{{ item.name }}</span>
              </div>
              <span :class="item.active ? 'line-active' : ''"></span>
          </li>
      </ul>
    </header>
</template>
  
<script setup lang="ts">
  const menuBar = reactive([
        {
            name: 'Overview', icon: icomMenuBar, active: true,
        },
        {
            name: 'Order', icon: iconCart, active: false,
        },
        {
            name: 'Products', icon: iconProduct, active: false,
        },
        {
            name: 'Customers', icon: iconUser, active: false,
        },
        {
            name: 'Report', icon: iconReport, active: false,
        },
        {
            name: 'Transaction', icon: iconProduct, active: false,
        },
        {
            name: 'Shipment', icon: iconShipment, active: false,
        },
        {
            name: 'Help center', icon: iconProduct, active: false,
        },
        {
            name: 'Setting', icon: iconSetting, active: false,
        },
        {
            name: 'Logout', icon: iconProduct, active: false,
        },
  ]);

  const handleChooseTab = (item: any) => {
        menuBar.forEach(menu => menu.active = false);
        item.active = true;
  };
</script>
  
<style scoped>
</style>
  