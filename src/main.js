import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// Components
import CharacterGrid from '../src/components/character/CharacterGrid.vue'
import CharacterPage from '../src/components/character/CharacterPage.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
	{ path: '/characters', name: 'CharacterGrid', component: CharacterGrid },
	{
		path: '/characters/:id',
		name: 'CharacterPage',
		component: CharacterPage,
		props: true,
	},
	{ path: '*', redirect: '/characters' },
]

const router = new VueRouter({
	mode: 'history',
	routes,
})

new Vue({
	router,
	vuetify,
	render: h => h(App),
}).$mount('#app')
