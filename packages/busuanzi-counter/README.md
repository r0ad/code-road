# 不蒜子访问计数器

一个简单的Vue组件，用于在网站上显示不蒜子访问计数。

## 安装

```bash
pnpm add @code-road/busuanzi-counter
```

## 使用方法

### 作为Vue组件使用

```js
import { BusuanziCounter } from '@code-road/busuanzi-counter'
import '@code-road/busuanzi-counter/style'

// 在组件中使用
export default {
  components: {
    BusuanziCounter
  }
}
```

### 作为Vue插件使用

```js
import { createApp } from 'vue'
import App from './App.vue'
import BusuanziCounter from '@code-road/busuanzi-counter'
import '@code-road/busuanzi-counter/style'

const app = createApp(App)
app.use(BusuanziCounter)
app.mount('#app')
```

### 在VitePress中使用

在 `.vitepress/theme/index.js` 中：

```js
import DefaultTheme from 'vitepress/theme'
import BusuanziCounter from '@code-road/busuanzi-counter'
import '@code-road/busuanzi-counter/style'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(BusuanziCounter)
  }
}
```

然后在自定义布局中使用：

```vue
<template>
  <Layout>
    <template #nav-bar-title-after>
      <BusuanziCounter />
    </template>
  </Layout>
</template>
```

## 自定义样式

组件提供了默认样式，但你可以通过CSS覆盖这些样式：

```css
.visitor-badge {
  /* 自定义样式 */
}

.label {
  /* 自定义标签样式 */
}

.count {
  /* 自定义计数样式 */
}
```

## 许可证

MIT 