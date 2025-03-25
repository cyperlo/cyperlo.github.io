import {SidebarConfig4Multiple} from "vuepress/config";

import reactSideBar from "./sidebars/reactSideBar";
// @ts-ignore
export default {
    "/React/": reactSideBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
