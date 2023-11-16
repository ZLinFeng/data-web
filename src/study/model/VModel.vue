<script setup lang="ts">
import {ref} from "vue";
import CustomInput from "@/study/model/CustomInput.vue";

let labelText = ref("Hello")
let worldText = ref("World")
</script>

<template>
  <label>{{ labelText }}</label>
  <el-input placeholder="Hello" v-model="labelText"/>

  <br/>
  <label>{{ worldText }}</label>
  <br/>
  <input v-model="worldText"/>


  <br />
  <CustomInput v-model="worldText"/>
</template>

<style scoped>

</style>