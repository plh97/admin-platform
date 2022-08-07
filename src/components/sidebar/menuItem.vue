<template>
  <el-menu-item v-if="!route.children?.length" :index="route.path">
    <el-icon v-if="route.meta?.icon">
      <Icon class="icon" :icon="route.meta.icon" />
    </el-icon>
    {{ route.meta?.name }}
  </el-menu-item>
  <el-sub-menu v-else :index="route.path">
    <template #title>
      <el-icon v-if="route.meta?.icon">
        <Icon class="icon" :icon="route.meta.icon" />
      </el-icon>
      <span>{{ route.meta?.name }}</span>
    </template>
    <menu-item v-for="_route of route.children" :route="_route"></menu-item>
    <!-- <slot :routes="route.children" /> -->
  </el-sub-menu>
</template>

<script setup lang="ts">
import { RouteRecordRaw } from "vue-router";

const props = defineProps<{ route: RouteRecordRaw }>();
</script>
