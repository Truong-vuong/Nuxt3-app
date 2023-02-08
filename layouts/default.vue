<template>
    <header class="bg-gray-light">
        <ul class="flex justify-between items-center text-success-80">
            <li class="text-success-80"><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/products">Products</nuxt-link></li>
        </ul>
    </header>
    <Header></Header>
    <main>
        <slot/>
    </main>
    <footer>Footer</footer>
</template>