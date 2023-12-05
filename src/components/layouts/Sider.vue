<script setup lang="ts">
import {Odometer} from "@element-plus/icons-vue";
import Logo from "@/components/layouts/Logo.vue";
import {computed, onMounted, ref, watch} from "vue";
import SvgIcon from "@/components/commons/SvgIcon.vue";
import {useRoute} from "vue-router";

const backgroundColor = "white";
const textColor = "#495365";
const activeTextColor = "#6542e6";

const props = defineProps(["modelValue"])
const isOpen = computed(() => !props.modelValue)
const route = useRoute();
const activate = ref("dashboard")

watch(() => route.path, (newValue: string, _: string) => {
  let value = newValue.substring(1);
  let number = value.indexOf("/");
  value = value.substring(0, number >= 0 ? number : value.length);
  activate.value = value === "" ? "dashboard" : value;
});

onMounted(() => {
  let value = useRoute().path;
  value = value.substring(1);
  let number = value.indexOf("/");
  value = value.substring(0, number >= 0 ? number : value.length);
  activate.value = value === "" ? "dashboard" : value;
})

</script>

<template>
  <el-aside :width="isOpen ? '250px' : '100px'">
    <Logo style="height: 5%" :open="isOpen"/>
    <el-scrollbar>
      <el-menu
          :default-active="activate"
          :active-text-color="activeTextColor"
          :text-color="textColor"
          :collapse="props.modelValue"
          :collapse-transition="false"
          router
      >
        <el-menu-item index="dashboard" :style="{'justify-content': isOpen ? 'start' : 'center'}">
          <el-icon>
            <Odometer/>
          </el-icon>
          <span v-if="isOpen" class="menu-text">Dashboard</span>
        </el-menu-item>
        <el-menu-item index="cognition" :style="{'justify-content': isOpen ? 'start' : 'center'}">
          <svg-icon name="cognition"/>
          <span v-if="isOpen" class="menu-text">Cognition</span>
        </el-menu-item>
        <el-menu-item index="knowledge"
                      :style="{'justify-content': isOpen ? 'start' : 'center'}">
          <svg-icon name="knowledge"/>
          <span v-if="isOpen" class="menu-text">Knowledge</span>
        </el-menu-item>
        <el-menu-item index="information" :style="{'justify-content': isOpen ? 'start' : 'center'}">
          <svg-icon name="information"/>
          <span v-if="isOpen" class="menu-text">Information</span>
        </el-menu-item>
        <el-menu-item index="data" :style="{'justify-content': isOpen ? 'start' : 'center'}">
          <svg-icon name="data"/>
          <span v-if="isOpen" class="menu-text">Data</span>
        </el-menu-item>
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

  .inner-svg {
    margin-right: 0.5em;
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