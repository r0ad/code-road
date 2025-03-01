import { JSDOM } from 'jsdom'
import mermaid from 'mermaid'
import { clientScript } from './client-script'
import { cssContent } from './css-content'

/**
 * 在构建时将 Markdown 中的 Mermaid 图表渲染为静态 SVG
 * @param {Object} config - VitePress 配置对象
 * @param {Object} options - Mermaid 渲染器配置选项
 * @param {Object} options.mermaid - Mermaid 配置选项
 * @param {boolean} options.useCDN - 是否使用 CDN 加载 Mermaid，默认为 true
 * @param {string} options.cdnURL - Mermaid CDN URL，默认为 'https://cdn.jsdelivr.net/npm/mermaid@11.4.1/dist/mermaid.min.js'
 * @param {boolean} options.inlineCSS - 是否内联 CSS，默认为 false
 * @returns {Object} 扩展后的 VitePress 配置对象
 */
export function withMermaidRenderer(config = {}, options = {}) {
  // 默认选项
  const defaultOptions = {
    useCDN: true,
    cdnURL: 'https://cdn.jsdelivr.net/npm/mermaid@11.4.1/dist/mermaid.min.js',
    inlineCSS: false
  }
  
  // 合并选项
  const mergedOptions = { ...defaultOptions, ...options }
  const mermaidConfig = config.mermaid || {}
  
  // 保存原始的 head 配置
  const originalHead = config.head || []
  
  // 构建新的 head 配置
  const newHead = [...originalHead]
  
  // 添加 CSS
  if (mergedOptions.inlineCSS) {
    newHead.push(['style', {}, cssContent])
  } else {
    newHead.push([
      'link',
      {
        rel: 'stylesheet',
        href: '/css/mermaid.css'
      }
    ])
  }
  
  // 添加 Mermaid 脚本
  if (mergedOptions.useCDN) {
    newHead.push([
      'script',
      {
        src: mergedOptions.cdnURL
      }
    ])
  }
  
  // 添加客户端初始化脚本
  newHead.push([
    'script',
    {},
    clientScript
  ])
  
  // 保存原始的 markdown 配置
  const originalMarkdownConfig = config.markdown?.config || (() => {})
  
  // 扩展 markdown 配置
  const newMarkdown = {
    ...config.markdown,
    config: (md) => {
      // 调用原始的 markdown 配置
      originalMarkdownConfig(md)
      
      // 保存原始的 fence 渲染器
      const defaultFence = md.renderer.rules.fence
      
      // 重写 fence 渲染器
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const info = token.info.trim()
        
        // 如果是 mermaid 代码块
        if (info === 'mermaid') {
          try {
            // 如果不使用 CDN，尝试在服务器端渲染
            if (!mergedOptions.useCDN) {
              // 创建一个虚拟的 DOM 环境
              const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
              global.document = dom.window.document
              global.window = dom.window
              
              // 初始化 mermaid 配置
              mermaid.initialize({
                startOnLoad: false,
                theme: 'default',
                ...mermaidConfig,
                securityLevel: 'loose'
              })
              
              // 创建一个容器元素
              const container = dom.window.document.createElement('div')
              container.id = `mermaid-${idx}`
              dom.window.document.body.appendChild(container)
              
              // 渲染 mermaid 图表
              const { svg } = mermaid.mermaidAPI.render(`mermaid-${idx}`, token.content)
              
              // 清理全局对象
              delete global.document
              delete global.window
              
              return `<div class="mermaid-svg">${svg}</div>`
            } else {
              // 使用 CDN 时，返回客户端渲染的标记
              return `<pre class="mermaid">${token.content}</pre>`
            }
          } catch (error) {
            console.error('Mermaid 渲染错误:', error)
            // 渲染失败时，回退到客户端渲染
            return `<pre class="mermaid">${token.content}</pre>`
          }
        }
        
        // 对于非 mermaid 代码块，使用默认的渲染器
        return defaultFence(tokens, idx, options, env, self)
      }
    }
  }
  
  // 返回扩展后的配置
  return {
    ...config,
    head: newHead,
    markdown: newMarkdown
  }
} 