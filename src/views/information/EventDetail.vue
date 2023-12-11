<script setup lang="ts">

import NewsCard from "@/components/commons/card/NewsCard.vue";

</script>

<template>
    <div class="news">
      <el-scrollbar>
        <div class="news-content">
          <NewsCard title="News Title"
                    content="content xxxx ..."
                    create-datetime="2023-11-11 11:11:00"
                    icon="news"
                    from="Google News" />
        </div>
        <div class="news-content">
          <NewsCard title="News Title"
                    content="content xxxx ..."
                    create-datetime="2023-11-11 11:11:00"
                    icon="news"
                    from="Google News" />
        </div>
        <div class="news-content">
          <NewsCard title="News Title"
                    content="content xxxx ...aaaaaaa     aaaaaaaaa aaaaaaaaa aaaaaaaa aaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaa aaaaaa"
                    create-datetime="2023-11-11 11:11:00"
                    icon="news"
                    from="Google News" />
        </div>
        <div class="news-content">
          <NewsCard title="News Title"
                    content="content xxxx ...aaaaaaa     aaaaaaaaa aaaaaaaaa aaaaaaaa aaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaa aaaaaa"
                    create-datetime="2023-11-11 11:11:00"
                    icon="news"
                    from="Google News" />
        </div>
        <div class="news-content">
          <NewsCard title="News Title"
                    content="content xxxx ..."
                    create-datetime="2023-11-11 11:11:00"
                    icon="news"
                    from="Google News" />
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



</style>