<script setup lang="ts">
const props = defineProps(["url"])
</script>

<template>
  <el-avatar :size="40" :src="props.url" />
</template>

<style scoped>

</style>