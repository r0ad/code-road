import { build } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

// 确保 dist 目录存在
const distDir = resolve(process.cwd(), 'dist')
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir)
}

// 构建库
async function buildLib() {
  console.log('开始构建 mermaid-renderer 包...')
  
  try {
    await build({
      configFile: resolve(process.cwd(), 'vite.config.js')
    })
    
    console.log('构建成功！')
  } catch (error) {
    console.error('构建失败:', error)
    process.exit(1)
  }
}

// 复制 CSS 文件到 docs 目录
function copyCssToPublic() {
  console.log('复制 CSS 文件到 docs/public/css 目录...')
  
  const cssContent = fs.readFileSync(
    resolve(process.cwd(), 'src/css-content.js'),
    'utf-8'
  )
  
  // 提取 CSS 内容
  const cssMatch = cssContent.match(/`([\s\S]*)`/)
  if (cssMatch && cssMatch[1]) {
    const css = cssMatch[1]
    
    // 确保目标目录存在
    const cssDir = resolve(process.cwd(), '../../docs/public/css')
    if (!fs.existsSync(cssDir)) {
      fs.mkdirSync(cssDir, { recursive: true })
    }
    
    // 写入 CSS 文件
    fs.writeFileSync(resolve(cssDir, 'mermaid.css'), css)
    console.log('CSS 文件已复制到 docs/public/css/mermaid.css')
  } else {
    console.warn('无法提取 CSS 内容')
  }
}

// 执行构建
async function run() {
  await buildLib()
  copyCssToPublic()
}

run() 