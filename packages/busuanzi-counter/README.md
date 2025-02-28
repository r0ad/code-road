# 不蒜子访问计数器组件

一个简单的Vue 3组件，用于在网站中集成不蒜子访问统计功能。

## 安装

```bash
pnpm add @code-road/busuanzi-counter
```

## 基本用法

### 在Vue应用中使用

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import BusuanziCounter from '@code-road/busuanzi-counter'
import '@code-road/busuanzi-counter/style'

const app = createApp(App)
app.use(BusuanziCounter)
app.mount('#app')
```

然后在组件中使用：

```vue
<template>
  <div>
    <BusuanziCounter />
  </div>
</template>
```

### 在VitePress中使用

在VitePress中使用需要特别注意客户端激活。请按照以下步骤操作：

1. 创建`.vitepress/theme/index.js`文件：

```js
import DefaultTheme from 'vitepress/theme'
import '@code-road/busuanzi-counter/style'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // 扩展默认主题
    if (DefaultTheme.enhanceApp) {
      DefaultTheme.enhanceApp(ctx)
    }
    
    // 如果在客户端环境，动态导入组件
    if (typeof window !== 'undefined') {
      import('@code-road/busuanzi-counter/client').then(module => {
        module.default.enhance(ctx)
      })
    }
  }
}
```

2. 在你的VitePress组件中使用：

```vue
<template>
  <div>
    <ClientOnly>
      <BusuanziCounter />
    </ClientOnly>
  </div>
</template>
```

注意：必须使用VitePress的`<ClientOnly>`组件包裹，确保只在客户端渲染。

## 自定义样式

组件提供了基本样式，你可以通过CSS覆盖这些样式：

```css
.visitor-badge {
  /* 自定义样式 */
}
.visitor-badge .label {
  /* 标签样式 */
}
.visitor-badge .count {
  /* 计数样式 */
}
```

## 许可证

MIT 