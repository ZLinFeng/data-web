<script setup lang="ts">
import Child from "@/study/community/Child.vue";

const pro = "Parent Send to Child By Properties"

const event = (a: string) => {
  console.log(a)
}
</script>

<template>
  <Child :parentPro="pro" @parentEnt="event"/>
  <br>
</template>

<style scoped>

</style>