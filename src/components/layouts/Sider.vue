<script setup lang="ts">
import {Files, Odometer, Grid, Reading, Collection} from "@element-plus/icons-vue";
import Logo from "@/components/layouts/Logo.vue";
import {computed} from "vue";

const backgroundColor = "white";
const textColor = "#495365";
const activeTextColor = "#6542e6";

const props = defineProps(["modelValue"])
const isOpen = computed(() => !props.modelValue)

</script>

<template>
  <el-aside :width="isOpen ? '250px' : '100px'">
    <Logo style="height: 5%" :open="isOpen"/>
    <el-scrollbar>
      <el-menu
          :default-active=1
          :active-text-color="activeTextColor"
          :text-color="textColor"
          :collapse="props.modelValue"
          :collapse-transition="false"
      >
        <router-link to="/">
          <el-menu-item index="0" :style="{'justify-content': isOpen ? 'start' : 'center'}">
            <el-icon>
              <Odometer/>
            </el-icon>
            <span v-if="isOpen" class="menu-text">Dashboard</span>
          </el-menu-item>
        </router-link>
        <router-link to="knowledge">
          <el-menu-item index="1" :style="{'justify-content': isOpen ? 'start' : 'center'}">
            <el-icon>
              <Collection/>
            </el-icon>
            <span v-if="isOpen" class="menu-text">Cognition</span>
          </el-menu-item>
        </router-link>
        <router-link to="knowledge">
          <el-menu-item index="2" :style="{'justify-content': isOpen ? 'start' : 'center'}">
            <el-icon>
              <Files/>
            </el-icon>
            <span v-if="isOpen" class="menu-text">Knowledge</span>
          </el-menu-item>
        </router-link>
        <router-link to="information">
          <el-menu-item index="3" :style="{'justify-content': isOpen ? 'start' : 'center'}">
            <el-icon>
              <Reading/>
            </el-icon>
            <span v-if="isOpen" class="menu-text">Information</span>
          </el-menu-item>
        </router-link>
        <router-link to="data">
          <el-menu-item index="4" :style="{'justify-content': isOpen ? 'start' : 'center'}">
            <el-icon>
              <Grid/>
            </el-icon>
            <span v-if="isOpen" class="menu-text">Data</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style scoped>

.el-aside {
  height: 100%;
  background-color: white;
  user-select: none;
}

.el-menu {
  height: 100%;
  border: 0;
  width: 100%;
}

.el-scrollbar {
  margin-top: 10%;
  height: 85%;
  background-color: v-bind(backgroundColor);
}

.el-menu-item {
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin: 5px 10px 5px 10px;
  font-weight: 900;

  > span {
    margin-left: 5px;
  }
}

.el-menu-item.is-active {
  background-color: #e7e6fd;
}

.el-menu-item:hover {
  background-color: #e7e6fd;
  color: v-bind(activeTextColor);
}

.el-menu > a {
  text-decoration: none;
  color: inherit;
}

.el-menu-item a {
  text-decoration: none;
}
</style>