<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {Search, View} from "@element-plus/icons-vue";
import {countEvents, listEvents} from "@/api/information/Events.ts";
import {EventResponseItem, EventsSearchParams} from "@/api/information/type.ts";
import * as moment from "moment/moment";

const tableData = reactive<EventResponseItem[]>([]);
let eventsTotal = ref<number>(0);
const data = reactive<EventsSearchParams>({
  dates: [moment().subtract(7, "days").format("YYYY-MM-DD"),
    moment().format("YYYY-MM-DD")],
  projects: ["tw01"],
  domains: ["politics"],
  content: "",
  page: 1,
  pageSize: 50,
});

const search = (isPage: boolean) => {
  if (!isPage) {
    data.page = 1;
  }
  // 请求同步的
  countEvents(data).then((res) => {
    eventsTotal.value = res;

    listEvents(data).then((res) => {
      tableData.length = 0;
      let items = (res as EventResponseItem[]);
      for (let item of items) {
        tableData.push(item);
      }
    });
  });
}

onMounted(() => {
  search(false);
})

const domainOptions = [
  {
    value: "politics",
    label: "Politics"
  },
  {
    value: "military",
    label: "Military"
  },
  {
    value: "society",
    label: "Society"
  }
]

const projectOptions = [
  {
    value: "tw01",
    label: "tw01"
  },
  {
    value: "hk01",
    label: "hk01"
  },
  {
    value: "my01",
    label: "my01"
  }
]

const domain2type = new Map<string, string>();

domain2type.set("politics", "");
domain2type.set("military", "success");
domain2type.set("society", "danger");

</script>

<template>
  <div class="search-wrapper">
    <div class="search-date">
      <span class="search-label">Date</span>
      <el-date-picker
          v-model="data.dates"
          type="daterange"
          unlink-panels
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
      />
    </div>
    <div class="search-domain">
      <span class="search-label">Domains</span>
      <el-select
          v-model="data.domains"
          multiple
          collapse-tags
          collapse-tags-tooltip
          placeholder="Select"
      >
        <el-option
            v-for="item in domainOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </div>
    <div class="search-project">
      <span class="search-label">Projects</span>
      <el-select
          v-model="data.projects"
          multiple
          collapse-tags
          collapse-tags-tooltip
          placeholder="Select"
      >
        <el-option
            v-for="item in projectOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </div>
    <div class="search-content">
      <span class="search-label">Content</span>
      <el-input v-model="data.content" placeholder="Please input"/>
    </div>
    <div class="search-btn">
      <el-button type="primary" :icon="Search" @click="search(false)">Search</el-button>
    </div>
  </div>
  <div class="pagination-wrapper">
    <div class="pagination-inner-wrapper">
      <el-pagination background
                     layout="prev, pager, next"
                     v-model:current-page="data.page"
                     @current-change="search(true)"
                     :total="eventsTotal"
                     :page-size="50"/>
    </div>
  </div>
  <el-scrollbar style="height: 500px">
    <div class="events-wrapper">
      <div class="table-wrapper">
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column prop="date" label="Date" width="120em"/>
          <el-table-column prop="event" label="Event" width="auto"/>
          <el-table-column prop="hot" label="Hot" width="100em"/>
          <el-table-column prop="domain" label="Domain" width="100em">
            <template #default="scope">
              <el-tag :type="domain2type.get(scope.row.domain)">{{ scope.row.domain }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="action" label="Action" width="200em">
            <template #default>
              <el-button type="primary" size="small">
                View
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </el-scrollbar>
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
  padding-bottom: 1em;
}

.pagination-inner-wrapper {
  display: flex;
  justify-content: end;
  width: 95%;
}

.search-wrapper {
  padding-top: 2em;
  padding-bottom: 2em;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.search-domain {
  display: flex;
  align-items: center;
}

.search-label {
  padding-right: 0.4em;
}

.search-project {
  display: flex;
  align-items: center;
}

.search-content {
  display: flex;
  align-items: center;
}

.el-tag {
  > span {
    font-size: 2em;
  }
}

.el-table {
  $--el-tag-font-size: 1em;
}

/*:deep(.el-table) {
  --el-table-header-bg-color: red;
}*/
</style>