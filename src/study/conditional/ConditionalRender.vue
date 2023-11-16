<script setup lang="ts">

import {ref} from "vue";

const show = ref(false);

const key2name = {
  "a": "A",
  "b": "B",
}

</script>

<template>
  <div>
    <el-button @click="show = !show" type="primary">
      {{ show ? "Close" : "Show" }}
    </el-button>
    <p v-if="show"> Hello </p>
    <p v-else>Bye</p>
  </div>
  <br/>
  <div>
    <ul>
      <li v-for="(value, key, index) in key2name" :key="index">
        {{ key }} : {{ value }} : {{ index }}
      </li>
    </ul>
  </div>
  <br />
</template>

<style scoped>

</style>