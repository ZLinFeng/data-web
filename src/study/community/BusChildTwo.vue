<script setup lang="ts">
import $bus from "@/study/bus";

const send = () => {
  $bus.emit("receive", {data: "Hello World."})
}
</script>

<template>
  <el-button @click="send">Child Two</el-button>
</template>

<style scoped>

</style>