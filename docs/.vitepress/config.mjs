import { defineConfig } from 'vitepress'
const base = "/blog/";      // blog-demo 改成你仓库的名字
// https://vitepress.dev/reference/site-config
import AutoNav from "vite-plugin-vitepress-auto-nav";

import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  // VitePress's options here...
  title: '我的OC故事',
  themeConfig: {
     nav: [
      { text: '主页', link: '/' },
      { text: '小说集', link: '/简介' }
    ],
  }
};

const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  documentRootPath: 'docs',
  collapsed: false,
  capitalizeFirst: true
};


export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
