/**
 * 客户端初始化脚本，用于在浏览器中初始化 Mermaid
 */
export const clientScript = `
(function() {
  // 等待 DOM 加载完成
  document.addEventListener('DOMContentLoaded', function() {
    // 检查 mermaid 是否已加载
    if (typeof mermaid !== 'undefined') {
      // 初始化 mermaid
      mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        // 根据当前主题设置 Mermaid 主题
        themeVariables: {
          dark: document.documentElement.classList.contains('dark')
        }
      });
      
      // 监听主题变化
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.attributeName === 'class') {
            const isDark = document.documentElement.classList.contains('dark');
            // 重新初始化 mermaid 以应用新主题
            mermaid.initialize({
              startOnLoad: false,
              theme: 'default',
              themeVariables: {
                dark: isDark
              }
            });
            
            // 重新渲染所有图表
            document.querySelectorAll('.mermaid').forEach(function(element) {
              try {
                mermaid.render('mermaid-' + Date.now() + '-' + Math.floor(Math.random() * 10000), element.textContent)
                  .then(function(result) {
                    element.innerHTML = result.svg;
                  });
              } catch (error) {
                console.error('Mermaid 渲染错误:', error);
              }
            });
          }
        });
      });
      
      // 观察 html 元素的 class 变化
      observer.observe(document.documentElement, { attributes: true });
    }
  });
})();
` 