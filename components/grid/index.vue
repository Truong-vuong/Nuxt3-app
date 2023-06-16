<template>
  <table>
    <thead>
      <tr>
        <th v-for="item, index in column" :key="`${item}_${index}`">
          <span>{{ item }}</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data, index in gridData" :key="`${data}_${index}`">
        <td>{{ data[`${column[index]}`]}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const props = defineProps({
  urlAPI: {
    type: String,
    default: '/',
    required: true,
  },
  maxHeight: {
    type: Number,
    default: 600,
  },
  column: {
    type: Array,
    default: [],
    required: true,
  }, 
});
console.log(props)
const { data: gridData } = useFetch(`${props.urlAPI}`, { lazy: true });
console.log(2, gridData)
</script>

<style scoped></style>
