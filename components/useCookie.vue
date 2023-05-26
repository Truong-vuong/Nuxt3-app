<template>
    <div>
      <h1>Counter: {{ counter || '-' }}</h1>
      <button @click="counter = null">reset</button>
      <button @click="counter--">-</button>
      <button @click="counter++">+</button>
    </div>
  </template>
  <script setup>
  const counter = useCookie('counter', {
    maxAage: 1000, secure: true
  })
  counter.value = counter.value || Math.round(Math.random() * 1000)
  </script>