<script setup lang="ts">
import Sider from "@/components/layouts/Sider.vue";
import Header from "@/components/layouts/Header.vue";
import Content from "@/components/layouts/Content.vue";
import {ref} from "vue";

const is_collapse = ref(false);

</script>

<template>
  <el-container>
    <Sider v-model="is_collapse"/>
    <el-container class="wrapper">
      <Header class="header-wrapper" v-model="is_collapse"/>
      <Content class="body-wrapper"/>
    </el-container>
  </el-container>
</template>

<style scoped>
.wrapper {
  height: 100%;
  display: inline;
}

.el-container {
  height: 100%;
  background-color: #f1f2f6;
}

.header-wrapper {
  height: 5%;
}

.body-wrapper {
  height: 95%;
}
</style>