import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import routes from './routes'

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
	const _to = to.fullPath.replace(/\/$/, '')
	//const _from = from.fullPath.replace(/\/$/, "");
	//const _current = window.location.pathname.replace(/\/$/, "");
	const flag = _to !== '' && to.fullPath && to.fullPath.match(/\/$/)
	if (flag) {
		let _to2 = ''
		for (let i = 1; i < to.fullPath.split(/\//).length - 1; i++) {
			_to2 += '/' + to.fullPath.split(/\//)[i]
		}
		next(_to2)
	} else next()
})
export default router
