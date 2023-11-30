<script setup lang="ts">
import SvgIcon from "@/components/commons/SvgIcon.vue";
import AccountsView from "@/views/information/AccountsView.vue";
import {ref} from "vue";
import PersonsView from "@/views/information/PersonsView.vue";
import EventsView from "@/views/information/EventsView.vue";
import KeywordsView from "@/views/information/KeywordsView.vue";

const activeName = ref("accounts")

</script>

<template>
  <div>
    <div class="tab-wrapper">
      <el-tabs v-model="activeName">
        <el-tab-pane name="accounts">
          <template #label>
            <span class="custom-tabs-label">
              <svg-icon name="accounts"/>
              <span>Accounts</span>
            </span>
          </template>
          <AccountsView />
        </el-tab-pane>
        <el-tab-pane label="Persons" name="persons">
          <template #label>
            <span class="custom-tabs-label">
              <svg-icon name="key_persons"/>
              <span>Persons</span>
            </span>
          </template>
          <PersonsView />
        </el-tab-pane>
        <el-tab-pane label="Events" name="events">
          <template #label>
            <span class="custom-tabs-label">
              <svg-icon name="events"/>
              <span>Events</span>
            </span>
          </template>
          <EventsView />
        </el-tab-pane>
        <el-tab-pane label="Keywords" name="keywords">
          <template #label>
            <span class="custom-tabs-label">
              <svg-icon name="keywords"/>
              <span>Keywords</span>
            </span>
          </template>
          <KeywordsView />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped lang="scss">

.custom-tabs-label {
  display: flex;
  justify-content: center;
  align-items: center;

  .inner-svg {
    margin-right: 0.5em;
  }
}
</style>