import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

const vitepressSidebarOptions = {
  /*
       * 有关详细说明，请参阅下面的链接：
       * https://vitepress-sidebar.cdget.com/zhHans/guide/api
       */
      documentRootPath: '/',
      scanStartPath: 'src',
      // basePath: null,
      // resolvePath: null,
      useTitleFromFrontmatter: true,
      useTitleFromFileHeading: true,
      // frontmatterTitleFieldName: 'title',
      useFolderTitleFromIndexFile: true,
      // useFolderLinkFromIndexFile: false,
      // hyphenToSpace: true,
      // underscoreToSpace: true,
      // capitalizeFirst: false,
      // capitalizeEachWords: false,
      // collapsed: true,
      // collapseDepth: 2,
      // sortMenusByName: false,
      // sortMenusByFrontmatterOrder: false,
      // sortMenusByFrontmatterDate: false,
      // sortMenusOrderByDescending: false,
      // sortMenusOrderNumericallyFromTitle: false,
      // sortMenusOrderNumericallyFromLink: false,
      // sortFolderTo: null,
      // frontmatterOrderDefaultValue: 0,
      // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
      // removePrefixAfterOrdering: false,
      // prefixSeparator: '.',
      // excludeFiles: ['first.md', 'secret.md'],
      // excludeFilesByFrontmatterFieldName: 'exclude',
      // excludeFolders: ['secret-folder'],
      // includeDotFiles: false,
      // includeRootIndexFile: false,
      // includeFolderIndexFile: false,
      // includeEmptyFolder: false,
      // rootGroupText: 'Contents',
      // rootGroupLink: 'https://github.com/jooy2',
      // rootGroupCollapsed: false,
      // convertSameNameSubFileToGroupIndexPage: false,
      // folderLinkNotIncludesFileName: false,
      // keepMarkdownSyntaxFromTitle: false,
      // debugPrint: false,
};

/**
 * vite相关配置
 */
const viteConfig = { 
  optimizeDeps: {
    exclude: [ 
      '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
    ], 
  },
  ssr: { 
    noExternal: [ 
      // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
      '@nolebase/vitepress-plugin-enhanced-readabilities', 
    ], 
  }, 
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "编程之路",
  description: "来自程序员nine的探索与实践，持续迭代中。",
  srcDir: 'src',
  lang: 'zh-CN',
  // base: '/code-road/',
  vite: viteConfig,
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env)
          if (env.frontmatter?.title)
            return md.render(`# ${env.frontmatter.title}`) + html
          return html
        },
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: generateSidebar(vitepressSidebarOptions),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/r0ad/code-road' }
    ]
  }
})
