<script setup lang="ts">
const props = defineProps(["url"])

</script>

<template>
  <el-avatar :src="props.url" style="width: 2em; height: 2em"/>
</template>

<style scoped>

</style>