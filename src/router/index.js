import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: HomeView, 
			children: [
				{
					path: '',
					name: 'home',
					component: () => import('@/views/ChatView.vue')
				},
				{
					path: 'search',
					name: 'search',
					component: () => import('@/views/SearchView.vue')
				}
			]
		}, 
		{
			path: '/login',
			name: 'login',
			component: LoginView
		}, 
	]
})

export default router
