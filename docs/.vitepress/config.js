import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';
import { generateI18nLocale, generateI18nSearch } from 'vitepress-i18n';

/**
 * 多语言配置
 */
const defaultLocale = 'zhHans';
const defineSupportLocales = [
  { label: defaultLocale, translateLocale: defaultLocale }
];

const docRoot = 'docs';
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
  srcDir: "",
  outDir: '../docs-dist',
  lang: defaultLocale,
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  // base: '/code-road/',
  vite: viteConfig,
  themeConfig: {
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
      { text: '关于', link: '/about' }
    ],
    sidebar: generateSidebar([
      ...[defaultLocale].map((lang) => {
        return {
          ...commonSidebarConfig,
          documentRootPath: defaultLocale === lang ? `/${docRoot}` : `/${docRoot}/${lang}`,
          resolvePath: defaultLocale === lang ? '/' : `/${lang}/`,
          ...(defaultLocale === lang ? {} : { basePath: `/${lang}/` })
        };
      })
    ]),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/r0ad/code-road' }
    ],
    footer: {
      message: 'Released under the CC0 License',
      copyright: '© <a href="https://github.com/r0ad">r0ad</a>'
    }
  },
  locales: generateI18nLocale({
    defineLocales: defineSupportLocales,
    rootLocale: defaultLocale,
  })
})
