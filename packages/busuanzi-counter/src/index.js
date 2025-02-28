import BusuanziCounter from './BusuanziCounter.vue'
import './style.css'

// 导出组件
export { BusuanziCounter }

// 导出Vue插件
export default {
  install(app) {
    app.component('BusuanziCounter', BusuanziCounter)
  }
} 