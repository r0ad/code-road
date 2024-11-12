/**
 * 初始化函数
 * @param {Object} vuePress实例
 */


import { sidebarInstall } from './plugin/sidebar';
// import { generateI18nLocale, generateI18nSearch } from 'vitepress-i18n';

export const boot = (app)=>{

    // vitepress-i18n

    // vitepress-sidebar
    sidebarInstall(app)
    // @nolebase/vitepress-plugin-enhanced-readabilities
    

}