<script setup lang="ts">

import NewsCard from "@/components/commons/card/NewsCard.vue";
import {onMounted, ref} from "vue";
import {CloseBold} from "@element-plus/icons-vue";
import {EventNewsItem} from "@/api/information/type.ts";
import {listNewsByEventId} from "@/api/information/Events.ts";

const loading = ref(true);

const newsData = ref<EventNewsItem[]>([]);

const props = defineProps(["event", "eventId", "showDetail"])
const $emit = defineEmits(["update:showDetail"])

onMounted(() => {
  loading.value = true;
  listNewsByEventId(props.eventId).then((data: EventNewsItem[]) => {
    newsData.value = data;
    loading.value = false;
  });
})

</script>

<template>
  <div class="news">
    <div class="event-title">
      <el-tooltip :content="props.event" effect="light" placement="top">
        <span class="title-text">
          # {{ props.event }}
        </span>
      </el-tooltip>
      <el-button circle :icon="CloseBold" @click="$emit('update:showDetail', false)"/>
    </div>
    <el-scrollbar v-loading="loading">
      <div>
        <div class="news-content" v-for="item in newsData">
          <NewsCard :title="item.title"
                    :content="item.content"
                    :create-datetime="item.createTime"
                    icon="news"
                    :from="item.from"/>
        </div>
      </div>
      <div class="events-pagination">
        <div class="events-pagination-wrapper">
          <el-pagination background
                         layout="prev, pager, next"
                         :total="100"
                         :page-size="10"/>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped>
.news {
  height: 100%;
  margin-left: 0.5em;
  color: black;
}

.news-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}

.events-pagination-wrapper {
  display: flex;
  justify-content: end;
}

button {
  border: 0;
}

.event-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  border-radius: 1em;

  > span {
    margin-left: 1em;
  }
}

.title-text {
  width: 70%;
  font-weight: bolder;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

</style>