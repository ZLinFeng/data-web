<script setup lang="ts">
import {computed, ref} from "vue";

// 只读属性
let props = defineProps({parentPro: String})
let emit = defineEmits<{
  parentEnt: [value: string]
}>()

//使用ref 声明响应式状态  类似useState
let count = ref(0)

const childHandle = () => {
  emit("parentEnt", "Send to Parent")
}

const clickTimes = computed(() => {
  return count.value < 10 ? "Click times < 10" : "Click times >= 10"
})

</script>

<template>
  <div>
    {{ props.parentPro }}
  </div>
  <br/>
  <el-button type="primary" @click="childHandle">Child Button</el-button>
  <el-button type="primary" @click="count++">Child Button</el-button>
  <br/>
  <span>{{ count }}</span>
  <br/>
  <span> {{ clickTimes }} </span>
</template>

<style scoped>

</style>