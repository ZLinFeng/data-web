<script setup lang="ts">
import SvgIcon from "@/components/commons/SvgIcon.vue";

interface Props {
  icon: string,
  from: string,
  createDatetime: string,
  title: string,
  content: string,
}

const props = defineProps<Props>();

</script>

<template>
  <el-card class="news-card" shadow="hover">
    <template #header>
      <div class="card-header">
        <div class="news-from">
          <div class="from-name">
            <div class="from-logo">
              <svg-icon :name="props.icon"/>
            </div>
            <span style="margin-left: 0.5em">
              {{ props.from }}
            </span>
          </div>
          <span style="margin-right: 1em">
            {{ props.createDatetime }}
          </span>
        </div>
        <div class="title">
          {{ props.title }}
        </div>
      </div>
    </template>
    <div class="content">
      {{ props.content }}
    </div>
  </el-card>
</template>

<style scoped lang="scss">

::v-deep(.el-card__header) {
  padding: 0;
}

.news-from {
  font-size: 1em;
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8a92fc;
}

.from-name {
  display: flex;
  align-items: center;
  margin-left: 1em;
}

.from-logo {
  font-size: 1.5em;
}

.title {
  margin: 1em 0 1em 1em;
}
</style>