import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// Components
import CharacterGrid from '../src/components/CharacterGrid.vue'
import CharacterItem from '../src/components/CharacterItem.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
	{ path: '/characters', component: CharacterGrid },
	{ path: '/characters/:id(\\d+)', component: CharacterItem },
	{ path: '*', redirect: '/characters' },
]

const router = new VueRouter({
	mode: 'history',
	routes,
})

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
