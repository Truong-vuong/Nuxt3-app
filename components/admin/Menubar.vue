<template>
    <section class="menubar">
        <div class="header flex items-center justify-start pr-5">
            <!-- <SvgIcon :path="iconLogo" class="min-w-[20px] w-8 max-w-[40px]" transform="scale(0.8)" fill="#0091A8"/> -->
            <h2 class="font-extrabold text-xl text-gray-darker ml-2">NUXT</h2>
        </div>
        <div class="body flex flex-col space-y-8 text-gray-dark">
            <ul class="menu flex flex-col space-y-6">
                <li v-for="item,index in menuBar" :key="`${item}_${index}`">
                    <div @click="handleChooseTab(item)">
                        <SvgIcon :path="item.icon" class="w-5" :fill="item.active ? '#0091A8' : '#545E64'"/>
                        <span :class="item.active ? 'text-secondary-nav-100' : 'text-gray-dark'">{{ item.name }}</span>
                    </div>
                    <span :class="item.active ? 'line-active' : ''"></span>
                </li>
            </ul>
        </div>
        <div class="footer mr-5">
            <div class="bg-secondary-nav-100 p-3 rounded-lg flex flex-col items-center space-y-4">
                <span class="flex justify-center items-center w-8 h-8 rounded-full bg-white">
                    <SvgIcon :path="iconOtherFile" class="w-5" fill="#545E64"/>
                </span>
                <p class="text-sm text-gray-light font-bold">Shop Nuxt</p>
                <p class="text-xs text-gray-light">Lorem ipsum dolor sit amet consectetur adipisicing</p>
                <button class="text-xs font-semibold bg-white rounded p-2">Go to Shop</button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { iconLogo, icomMenuBar, iconCart, iconProduct,
        iconUser, iconReport, iconShipment, iconSetting } from '@/utils/icon';
    import { useAdminStore } from '@/stores/admin';

    interface MenuBar {
        name: string,
        icon: string,
        active: boolean,
    };

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
    const tabActive = useAdminStore();

    const handleChooseTab = (item: MenuBar) => {
        menuBar.forEach(menu => menu.active = false);
        item.active = true;
        tabActive.chooseTab(item.name);
    };
</script>

<style scoped>
    .menubar {
        @apply text-gray-darkest py-5 pl-5 flex flex-col space-y-10 border-r-2 border-l-gray-darker;
    }
    ul.menu li {
        @apply cursor-pointer flex items-center justify-between text-sm font-roboto font-medium h-7;
    }
    ul.menu li div {
        @apply flex items-center space-x-2 transition;
    }

    .line-active {
        @apply bg-secondary-nav-100 w-1 h-7 rounded-md;
    }
</style>