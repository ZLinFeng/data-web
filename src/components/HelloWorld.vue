<script setup lang="ts">

let props = defineProps(["count"]);

const add = (event) => {
  console.log(event)
  props.count += 1
}

</script>

<template>
  <el-button type="primary" @click="add">{{props.count}}</el-button>
</template>

<style scoped>
</style>
