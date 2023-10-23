import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '',
		name: 'Auth',
		redirect: '/login',
		component: () => import('../layouts/blank.vue'),
		children: [
			{
				path: '/join',
				name: 'Signup',
				component: () => import('../pages/auth/join.vue'),
			},
			{
				path: '/login',
				name: 'Login',
				component: () => import('../pages/auth/login.vue'),
			},
			{
				path: '/passwordless',
				name: 'Passwordless',
				component: () => import('../pages/auth/passwordless.vue'),
			},
			{
				path: '/reset',
				name: 'Reset Password',
				component: () => import('../pages/auth/reset.vue'),
			},
		],
	},
	{
		path: '',
		name: 'Clients',
		redirect: '/login',
		component: () => import('../layouts/dashboard.vue'),
		children: [
			{
				path: '/dashboard',
				name: 'Dashboard',
				component: () => import('../pages/dashboard/home.vue'),
			},
			{
				path: '/billing',
				name: 'Billing',
				component: () => import('../pages/dashboard/billing/billing.vue'),
			},
			{
				path: '/profile',
				name: 'Profile',
				component: () => import('../pages/dashboard/profile.vue'),
			},
			{
				path: '/admin',
				name: 'Admin',
				component: () => import('../pages/admin/index.vue'),
			},
			{
				path: '/admin/account',
				name: 'Edit Account',
				component: () => import('../pages/admin/account.vue'),
			},
			{
				path: '/admin/users',
				name: 'User Admin',
				component: () => import('../pages/admin/users.vue'),
			},
		],
	},
]

export default routes
