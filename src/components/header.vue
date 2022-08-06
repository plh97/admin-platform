<template>
  <div class="header">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="route of list" :to="{ path: route.path }">
        {{ t(route.name) }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-select v-model="locale">
      <el-option
        v-for="locale of availableLocales"
        :label="locale"
        :value="locale"
        :key="locale"
      />
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const { t, locale, availableLocales } = useI18n();
const route = useRoute();
const list = computed(() =>
  route.matched.map((route) => ({
    name: String(route.name ?? ""),
    path: route.path,
  }))
);
</script>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  user-select: none;
  height: 50px;
  width: 100vw;
  border-bottom: 1px solid #cccccc42;
  box-shadow: 0px -5px 20px 0px #ccc;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
}
</style>
