import '@style/common.scss'

import Vue from 'vue'
import store from '@store'
import router from './router'

import App from './App'

new Vue({
	el: 'main',
	store,
	router,
	components: {
		App,
	},
	template: '<App />',
})
