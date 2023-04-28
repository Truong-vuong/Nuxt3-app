<template>
  <header>
    <div class="header">
      <div class="header__logo">
        <img
          src="https://kfkit.rometheme.pro/criativo/wp-content/uploads/sites/10/2021/08/Logo.png"
          alt="logo"
          width="160"
          height="44"
        />
      </div>
      <div class="header__menu">
        <ul class="header__menu__list">
          <li
            class="header__menu__item"
            v-for="(menu, index) in menuList"
            :key="`${menu}_${index}`"
          >
            {{ menu }}
          </li>
        </ul>
      </div>
      <div class="header__search">
        <span>O</span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const menuList: string[] = ["Home", "About us", "Services", "Contact", "Pages"];
</script>

<style scoped lang="scss">
header {
  @apply bg-neutral-900 font-roboto h-28;

  .header {
    @apply flex items-center h-full max-w-[1140px] mx-auto py-5 px-5 sm:px-[30px];

    &__logo {
        @apply w-1/5;
    }

    &__menu {
      @apply w-3/4 text-neutral-50 font-bold;

      &__list {
        @apply flex items-center justify-end;
      }

      &__item {
        @apply px-5 cursor-pointer;
      }
    }

    &__search {
        @apply w-[5%] text-neutral-50 flex justify-center;
    }
  }
}
</style>
