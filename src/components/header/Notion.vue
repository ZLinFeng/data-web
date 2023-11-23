<script setup lang="ts">

import {Bell} from "@element-plus/icons-vue";


</script>

<template>
  <el-badge class="item" :max="99" :value="10">
    <el-button class="share-button"
               :icon="Bell"
               circle/>
  </el-badge>
</template>

<style scoped>
.el-button {
  border: 0;
  font-size: 2em;
  padding: 0;
  height: 1em;
  width: 1em;
}
</style>