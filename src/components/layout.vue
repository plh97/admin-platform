<template>
  <div class="layout">
    <top-header />
    <div class="body">
      <sidebar />
      <div class="main">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopHeader from "@/components/header.vue";
import Sidebar from "@/components/sidebar/index.vue";
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  .body {
    flex: 1;
    display: flex;
    flex-direction: row;
    .main {
      padding: 10px;
    }
  }
}
</style>
