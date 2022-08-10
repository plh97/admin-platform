<template>
  <div class="header">
    <el-row :gutter="5" justify="space-between">
      <el-col :span="6">
        <el-input v-model="state.name" placeholder="name" />
      </el-col>
      <el-col :span="6">
        <el-select v-model="state.type">
          <el-option label="All" :value="-1" />
          <el-option label="Done" :value="0" />
          <el-option label="Undo" :value="1" />
        </el-select>
      </el-col>
      <el-col :span="6"> </el-col>
      <el-col :span="-1">
        <el-button type="primary" @click="handleAdd">+ Add</el-button>
      </el-col>
    </el-row>
  </div>
  <el-table :data="state.list" width="100%">
    <el-table-column prop="id" label="id" />
    <el-table-column prop="name" label="name" />
    <el-table-column prop="description" label="description" />
    <el-table-column prop="status" label="status" />
  </el-table>
</template>

<script lang="ts" setup>
import http from "@/utils/request";
import { onMounted, reactive } from "vue";

interface TODO {
  id: string;
  name: string;
  description: string;
}
interface IState {
  list: TODO[];
  type: number;
  name: string;
}

const state = reactive<IState>({
  list: [],
  type: -1,
  name: "",
});

onMounted(async () => {
  const res = await http<{
    list: TODO[];
  }>({
    url: "list",
    method: "GET",
  });
  if (res) {
    state.list = res.list;
  }
});
function handleAdd() {
  state.list.push({
    id: "3",
    name: "new one",
    description: "descript",
  });
}
</script>

<route lang="yaml">
name: list
meta:
  name: list
  layout: Default
  index: 3
</route>
