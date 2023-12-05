<script setup lang="ts">
</script>

<template>
  <el-container class="content">
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style scoped>
.el-main {
  background: white;
  height: 100%;
}

.content {
  border-left: 2px solid #f1f2f6;
}
</style>