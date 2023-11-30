<script setup lang="ts">
import SvgIcon from "@/components/commons/SvgIcon.vue";
</script>

<template>
  <div>
    <div class="tab-wrapper">
      <el-tabs>
        <el-tab-pane name="first">
          <template #label>
            <span class="custom-tabs-label">
              <svg-icon name="accounts"/>
              <span>Accounts</span>
            </span>
          </template>
          User
        </el-tab-pane>
        <el-tab-pane label="Persons" name="second">Config</el-tab-pane>
        <el-tab-pane label="Events" name="third">Role</el-tab-pane>
        <el-tab-pane label="Keywords" name="fourth">Task</el-tab-pane>
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