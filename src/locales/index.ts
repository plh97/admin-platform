import { createI18n } from "vue-i18n";
import enUs from "./i18n/en-us";
import zhCn from "./i18n/zh-cn";
const messages = {
  "en-us": enUs,
  "zh-cn": zhCn,
};

// 2. Create i18n instance with options
export const install = createI18n({
  locale: "zh-cn", // set locale
  allowComposition: true, // you need to specify that!
  fallbackLocale: "zh-cn", // set fallback locale
  messages, // set locale messages
  legacy: false,
});
