<script setup lang="ts">
interface Props {
  open?: boolean
}

const props = withDefaults(defineProps<Props>(), {open: true});
</script>

<template>
  <div class="logo-container">
    <div v-if="props.open">
      <span class="logo-text-light">Giraffe </span>
      <span class="logo-text-bold">Data</span>
    </div>
    <div v-else>
      <span class="logo-text-light">G</span>
      <span class="logo-text-bold">D</span>
    </div>
  </div>
</template>

<style scoped>
.logo-container {
  margin-top: 1em;
  display: flex;
  font-size: 2em;
  color: black;
  justify-content: center;
  align-items: center;
  background-color: white;
  user-select: none;
}

.logo-text-light {
  font-weight: 300;
  color: #6542e6;
}

.logo-text-bold {
  font-weight: 500;
}
</style>