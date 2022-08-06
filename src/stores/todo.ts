// stores/counter.js
import { defineStore } from "pinia";

export const useCounterStore = defineStore("todo", {
  state: () => {
    return { log: [] };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    addLog(log: never) {
      this.log.push(log);
    },
  },
});
