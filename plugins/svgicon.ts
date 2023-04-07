



import svgIcon from '@/components/SvgIconname/index.vue'
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('svg-icon', svgIcon)
})