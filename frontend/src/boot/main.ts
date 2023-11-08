import { boot } from 'quasar/wrappers'
import 'quasar/src/css/index.sass'
import { createPinia } from 'pinia'
import { JLCore, instance } from '@juicyllama/frontend-core'

import '@juicyllama/frontend-core/dist/style.css'
import '@juicyllama/vue-utils/dist/style.css'
import '@/css/juicyllama.override.css'
import '@/css/quasar.extra.css'
import { version } from '../../package.json'

export default boot(async ({ app }) => {

	const comment = document.createComment(`App version: ${version}`)
	document.body.appendChild(comment)

	const pinia = createPinia()

	app.use(JLCore, { $pinia: pinia })
		.use(pinia)

	instance.defaults.baseURL = process.env.VITE_API_BASE_URL
})
