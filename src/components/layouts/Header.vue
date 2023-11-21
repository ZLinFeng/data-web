<script setup lang="ts">

import {Expand, Fold} from "@element-plus/icons-vue";
import Avatar from "@/components/header/Avatar.vue";
import Notion from "@/components/header/Notion.vue";

const props = defineProps(["modelValue"])
const $emit = defineEmits(["update:modelValue"])

const avatarUrl = "https://img2.baidu.com/it/u=1297740018,2772695612&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500";

const changeCollapse = () => {
  $emit("update:modelValue", !props.modelValue)
}
</script>

<template>
  <el-header class="header">
    <el-row class="header-row" justify="space-between">
      <el-col :span="2" class="collapse-btn">
        <el-icon v-if="props.modelValue" @click="changeCollapse">
          <Expand/>
        </el-icon>
        <el-icon v-else @click="changeCollapse">
          <Fold/>
        </el-icon>
      </el-col>
      <el-col :span="6">
        <el-row justify="end" class="setting-container">
          <el-col :span="4">
            <Notion/>
          </el-col>
          <el-col :span="4">
            <Avatar :url="avatarUrl"/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-header>
</template>

<style scoped>
.header {
  background: white;
  border-bottom: 2px solid #f1f2f6;
  border-left: 2px solid #f1f2f6;
  user-select: none;
}

.header-row {
  height: 100%;
}

.collapse-btn {
  display: flex;
  align-items: center;
  font-size: 1.5em;
  cursor: pointer;
}

.setting-container {
  height: 100%;
  align-items: center;
}


</style>