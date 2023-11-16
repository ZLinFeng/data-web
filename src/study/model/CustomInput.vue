<script setup lang="ts">
import {computed} from "vue";

let pro = defineProps({"modelValue": String})
let $emit = defineEmits(["update:modelValue"])


const value = computed({
  get() {
    return pro.modelValue
  },
  set(newValue) {
    $emit("update:modelValue", newValue)
  }
})

</script>

<template>
  <input v-model="value"/>
</template>

<style scoped>

</style>