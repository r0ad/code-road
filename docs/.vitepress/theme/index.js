// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import './custom.css'
import { 
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesScreenMenu, 
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'


export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // 为较宽的屏幕的导航栏添加阅读增强菜单
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), 

    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
