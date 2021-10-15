import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/link-resolver'
import htmlSerializer from './prismic/html-serializer'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide'
import bootstrap from 'bootstrap'
import VueNumber from 'vue-number-animation'

Vue.use(VueNumber)

Vue.config.productionTip = false


Vue.use(PrismicVue, {
    endpoint: window.prismic.endpoint,
    linkResolver,
    htmlSerializer
})

Vue.use(VueSplide);

new Vue({
        router,
        render: h => h(App)
    },

    {
        el: '#app',
        render: h => h(App),
    }

).$mount('#app')