import { defineConfig } from 'vitepress'
const base = "/blog/";      // blog-demo 改成你仓库的名字
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "乡村小电工的OC故事",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '目录', link: '/books' }
    ],

    sidebar: [
      {
        text: '列表',
        items: [
          { text: '简介', link: '/books' },
          { text: 'book1', link: '/book1' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
