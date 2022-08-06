<script setup lang="ts">
import { useCounterStore } from "@/stores/todo";
import Layout from "@/components/layout.vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

const locale = zhCn;
</script>
<template>
  <div id="app">
    <el-config-provider :locale="locale">
      <layout>
        <router-view />
      </layout>
    </el-config-provider>
  </div>
</template>
