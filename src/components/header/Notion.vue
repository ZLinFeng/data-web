<script setup lang="ts">

import {Bell} from "@element-plus/icons-vue";
</script>

<template>
  <el-badge class="item" :max="99" :value="10">
    <el-button class="share-button"
               :icon="Bell"
               circle size="large"/>
  </el-badge>
</template>

<style scoped>
.el-button {
  font-size: 40px;
  border: 0;
}
</style>