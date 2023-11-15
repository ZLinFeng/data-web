<script setup lang="ts">
import $bus from "@/study/bus";
import {onMounted, ref} from "vue";
// 当组件挂载完毕后，当前组件绑定一个事件，接受将来兄弟组件传递的数据

onMounted(() => {
  //第一个参数为事件类型, 第二个参数是事件的回调
  $bus.on("receive", (data:any) => {
    console.log(data)
    content.value = data.data
  })
})

const content = ref("Child One")

</script>

<template>
  <el-button>{{ content }}</el-button>
</template>

<style scoped>

</style>