<script setup lang="ts">
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<template>
  <div class="events-wrapper">
    <div class="table-wrapper">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Event" width="180" />
        <el-table-column prop="address" label="Hot" />
        <el-table-column prop="category" label="Category" />
        <el-table-column prop="action" label="Action" />
      </el-table>
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

:deep(.el-table) {
  --el-table-header-bg-color: red;
}
</style>