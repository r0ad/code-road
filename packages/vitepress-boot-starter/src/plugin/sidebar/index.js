import { generateSidebar } from 'vitepress-sidebar'


const docRoot = 'docs';
const defaultLocale = 'zhHans';

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
 * 插件初始化
 * @param {*} app 相关配置
 */
export const sidebarInstall = (app) => {
  app.sidebar = {
    ...app?.sidebar,
    ...generateSidebar([
      ...[defaultLocale].map((lang) => {
        return {
          ...commonSidebarConfig,
          documentRootPath:
            defaultLocale === lang ? `/${docRoot}` : `/${docRoot}/${lang}`,
          resolvePath: defaultLocale === lang ? '/' : `/${lang}/`,
          ...(defaultLocale === lang ? {} : { basePath: `/${lang}/` })
        }
      })
    ])
  }
}
