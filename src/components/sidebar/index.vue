<template>
  <el-menu
    :collapse="!toggle"
    class="sidebar"
    :default-active="defaultActive"
    router
  >
    <menu-item v-for="route of i18nRoute" :route="route">
      <template #default="{ routes }">
        <menu-item v-for="route of routes" :route="route"></menu-item>
      </template>
    </menu-item>
    <el-row
      @click="() => (toggle = !toggle)"
      class="toggle-icon"
      :class="toggle ? 'spin-180' : ''"
      justify="center"
    >
      <el-icon>
        <Icon class="icon" icon="ep:arrow-right" />
      </el-icon>
    </el-row>
  </el-menu>
</template>

<script setup lang="ts">
import { filterRouter, i18nRouter, sortRoute } from "@/utils/route";
import routers from "virtual:generated-pages";
import { computed, ref } from "vue";
import menuItem from "./menuItem.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const defaultActive = computed(() => {
  return route.matched[route.matched.length - 1]?.path ?? "";
});

sortRoute(routers);
const filterRoute = filterRouter(routers);
const i18nRoute = computed(() => filterRoute.map((route) => i18nRouter(route)));
const toggle = ref(true);
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  user-select: none;
}
.sidebar:not(.el-menu--collapse) {
  min-width: 200px;
}
.toggle-icon {
  cursor: pointer;
  transition: all ease 0.1s;
}
.spin-180 {
  transform: rotate(180deg);
}
</style>
