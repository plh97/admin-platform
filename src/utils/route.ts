import { useI18n } from "vue-i18n";
import { RouteRecordRaw } from "vue-router";

export const filterRouter = (list: RouteRecordRaw[], totalPath = "") => {
  const result: RouteRecordRaw[] = [];
  list.forEach(({ path, meta, children }) => {
    if (meta && !meta.hide) {
      const newPath = totalPath !== "" ? `${totalPath}/${path}` : path;
      if (children) {
        const child = filterRouter(children, newPath);
        result.push({ meta, path: newPath, children: child });
      } else {
        result.push({ path: newPath, meta } as RouteRecordRaw);
      }
    }
  });
  return result;
};

export function i18nRouter(node: RouteRecordRaw): RouteRecordRaw {
  const { t } = useI18n();
  const tempNode = JSON.parse(JSON.stringify(node)) as RouteRecordRaw;
  if (tempNode.meta?.name) {
    tempNode.meta.name = t(tempNode.meta.name as string);
  }
  if (tempNode?.children?.length) {
    tempNode.children = tempNode?.children?.map((childNode) => {
      return i18nRouter(childNode);
    });
  }
  return tempNode;
}
/**
 * 递归排序 routes
 * @params routes RouteRecordRaw[]
 * @params key string
 *
 * @return void
 */
export function sortRoute(routes: RouteRecordRaw[] = [], key = "index") {
  // Sort
  routes.sort((routeA, routeB) => {
    const a = String(routeA.meta?.[key]);
    const b = String(routeB.meta?.[key]);
    return a.localeCompare(b);
  });
  // Recursion children
  routes.forEach((route) => route.children && sortRoute(route.children ?? []));
}

export default {
  i18nRouter,
  sortRoute,
};
