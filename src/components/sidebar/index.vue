<template>
  <el-menu
    class="sidebar"
    :default-active="defaultActive"
    @open="() => {}"
    @close="() => {}"
    router
  >
    <menu-item v-for="route of i18nRoute" :route="route">
      <template #default="{ routes }">
        <menu-item v-for="route of routes" :route="route"></menu-item>
      </template>
    </menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { filterRouter, i18nRouter, sortRoute } from "@/utils/route";
import routers from "virtual:generated-pages";
import { computed } from "vue";
import menuItem from "./menuItem.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const defaultActive = computed(() => {
  return route.matched[route.matched.length - 1]?.path ?? "";
});

sortRoute(routers);
const filterRoute = filterRouter(routers);
const i18nRoute = computed(() => filterRoute.map((route) => i18nRouter(route)));
</script>

<style lang="scss" scoped>
.sidebar {
  width: 200px;
  height: 100%;
  user-select: none;
}
</style>
