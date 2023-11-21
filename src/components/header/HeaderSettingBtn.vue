<script setup lang="ts">

const props = defineProps({
  type: {
    type: String,
    default() {
      return "icon"
    },
    validator(value: string) {
      return ["icon", "avatar", "badge"].includes(value)
    }
  }
})

</script>

<template>
  <el-button>

  </el-button>
</template>

<style scoped>
.el-b
</style>