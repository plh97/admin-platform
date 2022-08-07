<template>
  <div>todo-list</div>
  {{ data }}
</template>

<script setup>
import http from "@/utils/request";

const data = await http({
  url: "/list",
  method: "get",
});
</script>

<route lang="yaml">
name: list
meta:
  name: list
  layout: Default
  index: 3
</route>
