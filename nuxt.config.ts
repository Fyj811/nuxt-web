import { createStyleImportPlugin,AntdResolve } from 'vite-plugin-style-import'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app:{
    head:{
      title:'这是网站的标题',
      "meta":[
        {"charset": "utf-8"},
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://static.panpay.com/static/image/cn/favicon.png' },
      ],
    },
  },
  css:[
    // 'ant-design-vue/dist/antd.min.css',
    // 'ant-design-vue/dist/antd.less', 
    // '@/assets/styles/reset.css',
    '@/assets/css/animate.min.css',
    '@/assets/styles/common.scss',
  ],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `usePinia()`
          'defineStore',
          // 自动引入 `usePinia()` 并重命名为 `usePiniaStore()`
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
    '@nuxtjs/color-mode',
    'nuxt-svg-icons',
    'nuxt-swiper',
    'nuxt-icons'
    // use inline options
    // [
    //   'nuxt-svg-icons',
    //   {
    //     svg4vue: { assetsDirName: 'assets/icons' }
    //   }
    // ]
  ],
  nuxtSvgIcons:{ //nuxt-svg-icons
    svg4vue: {
      assetsDirName: 'assets/icons'
    }
  },
  runtimeConfig:{
    public: {
      apiBase: process.env.VITE_GLOBAL_API_URL || '/api'
    }
  },
  // devServer:{
  //   host:'0.0.0.0',
  //   port:4567
  // }
  build: {
    
  },
  vite:{
    plugins:[
      createStyleImportPlugin({
        resolves: [AntdResolve()],
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/svg')],
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    css:{
      preprocessorOptions: {
        less: {
          modifyVars: {// 更改主题
            // hack: `true; @import (reference) "${path.resolve('src/assets/less/global.less')}";`,
            'primary-color': '#2096f3', // 全局主色
            'link-color': '#2096f3', // 链接色
            'success-color': '#00B86B', // 成功色
            'warning-color': '#FF9500', // 警告色
            'border-radius-base':'6px'
          },
          javascriptEnabled: true,
        },
        scss:{
          additionalData: '@import "@/assets/styles/default.scss";'	
        }
      },
    },
    build:{
      minify:'terser',
      target:'es2020',
      chunkSizeWarningLimit: 1500, // 分块打包，分解块，将大块分解成更小的块
      cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      terserOptions: {
        compress: {
          // warnings: false,
          drop_console: true,  //打包时删除console
          drop_debugger: true, //打包时删除 debugger
          pure_funcs: ['console.log'],
        },
        output: {
          // 去掉注释内容
          comments: true,
        },
      },
      rollupOptions: {
        output:{
          manualChunks(id:any) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      }
    },
    server:{
      proxy:{
        '/api':{
          target:'https://ibtest.panpay.com',
          rewrite: (path:string) => path.replace(/^\/api/, ''),
          changeOrigin: true,
        }
      }
    },
    resolve:{
      alias:{
        'vue-i18n':'vue-i18n/dist/vue-i18n.cjs.js'
      }
    }
  }
})
