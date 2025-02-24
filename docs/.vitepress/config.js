import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import { withI18n } from 'vitepress-i18n'

/**
 * 多语言配置
 */
const defaultLocale = 'zhHans'
const defineSupportLocales = [
  defaultLocale
]

const docRoot = 'docs'
/**
 * 侧边栏生成插件配置
 */
const commonSidebarConfig = {
  /*
   * 有关详细说明，请参阅下面的链接：
   * https://vitepress-sidebar.cdget.com/zhHans/guide/api
   */
  // documentRootPath: docRoot,
  // scanStartPath:docRoot,
  // resolvePath: '/',
  useTitleFromFrontmatter: true,
  useTitleFromFileHeading: true,
  // frontmatterTitleFieldName: 'title',
  useFolderTitleFromIndexFile: true,
  debugPrint: true,
  manualSortFileNameByPriority: ['path.md']
}

/**
 * vite相关配置
 */
const viteConfig = {
  optimizeDeps: {
    exclude: ['@nolebase/vitepress-plugin-enhanced-readabilities/client']
  },
  ssr: {
    noExternal: [
      // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
      '@nolebase/vitepress-plugin-enhanced-readabilities'
    ]
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withI18n(
    {
      title: '编程之路',
      description: '来自程序员nine的探索与实践，持续迭代中。',
      srcDir: '',
      outDir: '../docs-dist',
      lang: defaultLocale,
      lastUpdated: true,
      cleanUrls: true,
      metaChunk: true,
      // base: '/code-road/',
      vite: viteConfig,
      head: [
        [
          'link',
          {
            rel: 'stylesheet',
            href: '/css/mermaid.min.css'
          }
        ],
        [
          'script',
          {
            src: 'https://unpkg.com/mermaid@11.4.1/dist/mermaid.min.js'
          }
        ]
      ],
      markdown: {
        config: (md) => {
          const defaultFence = md.renderer.rules.fence;
          md.renderer.rules.fence = (tokens, idx, options, env, self) => {
            const token = tokens[idx];
            const info = token.info.trim();
            if (info === 'mermaid') {
              const code = token.content;
              return `<pre class="mermaid">${code}</pre>`;
            }
            return defaultFence(tokens, idx, options, env, self);
          };
        }
      },
      themeConfig: {
        logo: '/faviconsmall.webp',
        // 添加 GitHub 编辑链接配置
        editLink: {
          pattern: 'https://github.com/r0ad/code-road/edit/master/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        search: {
          provider: 'local',
          options: {
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
          { text: '规划', link: '/plan' },
          { text: '关于', link: '/about' }
        ],
        sidebar: generateSidebar([
          ...[defaultLocale].map((lang) => {
            return {
              ...commonSidebarConfig,
              documentRootPath:
                defaultLocale === lang
                  ? `/${docRoot}`
                  : `/${docRoot}/${lang}`,
              resolvePath: defaultLocale === lang ? '/' : `/${lang}/`,
              ...(defaultLocale === lang ? {} : { basePath: `/${lang}/` })
            }
          })
        ]),
        socialLinks: [
          { icon: 'github', link: 'https://github.com/r0ad/code-road' }
        ],
        footer: {
          message: "a coder's try ",
          copyright: '© <a href="https://github.com/r0ad">r0ad</a>'
        }
      }
    },
    {
      locales: defineSupportLocales,
      rootLocale: defaultLocale
    }
  )
)
