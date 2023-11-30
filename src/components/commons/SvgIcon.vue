<script setup lang="ts">
interface IconPro {
  name: string,
}

const pro = defineProps<IconPro>();
</script>

<template>
  <svg class="inner-svg">
    <use :xlink:href="'#icon-' + pro.name"></use>
  </svg>
</template>

<style scoped>
.inner-svg {
  height: 1.2em;
  width: 1.2em;
}
</style>