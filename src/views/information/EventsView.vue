<script setup lang="ts">
import {ref} from "vue";

const tableData = [

]
const eventsTotal = ref(1000)
</script>

<template>
  <div class="events-wrapper">
    <div class="table-wrapper">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="date" label="Date" width="120em" />
        <el-table-column prop="name" label="Event" />
        <el-table-column prop="hot" label="Hot" width="50em"/>
        <el-table-column prop="domain" label="Domain" width="80em"/>
        <el-table-column prop="action" label="Action" width="200em"/>
      </el-table>
    </div>
  </div>
  <div class="pagination-wrapper">
    <div class="pagination-inner-wrapper">
      <el-pagination background layout="prev, pager, next" :total="eventsTotal" :page-size="50"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.events-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.table-wrapper {
  width: 95%;
}

.pagination-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1em;
}

.pagination-inner-wrapper {
  display: flex;
  justify-content: end;
  width: 95%;
}

/*:deep(.el-table) {
  --el-table-header-bg-color: red;
}*/
</style>