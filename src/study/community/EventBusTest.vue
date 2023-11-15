<script setup lang="ts">

import BusChildOne from "@/study/community/BusChildOne.vue";
import BusChildTwo from "@/study/community/BusChildTwo.vue";
</script>

<template>
  <div class="container">
    <div class="child-one">
      <BusChildOne />
    </div>
    <div class="child-two">
      <BusChildTwo />
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 500px;
  width: 1000px;
  background-color: antiquewhite;
  display: flex;
  justify-content: space-between;
}

.child-one {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.child-two {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>