import type { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";

import type { ViteEnv } from "../utils";
import { configUnoCSSPlugin } from "./unocss";
import { configUNPluginAutoImportPlugin } from "./unpluginAutoImport";
import { configUNPluginVueComponents } from "./unpluginVueComponets";
export function configVitePlugins(
  root: string,
  viteEnv: ViteEnv,
  isBuild: boolean,
) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue({
      // https://vuejs.org/guide/extras/reactivity-transform.html
      // 开启响应性语法糖 （试验性特性）
      // Reactivity Transform
      reactivityTransform: true,
    }),
  ];

  // https://github.com/antfu/unplugin-auto-import
  vitePlugins.push(configUNPluginAutoImportPlugin());

  // https://github.com/antfu/unplugin-vue-components
  vitePlugins.push(configUNPluginVueComponents());

  vitePlugins.push(configUnoCSSPlugin());
  // The following plugins only work in the production environment
  if (isBuild) {
  //
  }
  return vitePlugins;
}
