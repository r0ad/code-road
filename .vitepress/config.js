import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "编程之路",
  description: "来自程序员nine的探索与实践，持续迭代中。",
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Spring6全攻略',
        items: [
          { text: '为什么从源码学习Spring6？', link: '/spring6-guide/00-intro' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/r0ad/code-road' }
    ]
  }
})
