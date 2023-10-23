/* eslint-env node */
const { configure } = require('quasar/wrappers')
const fs = require('fs')

require('dotenv').config()

module.exports = configure(function (/* ctx */) {
	return {
		eslint: {
			warnings: true,
			errors: false,
		},
		boot: ['main'],

		build: {
			vueRouterMode: 'hash',

			extendViteConf(viteConf) {
				viteConf.build.sourcemap = true
				viteConf.optimizeDeps.include = []
			},

			env: {
				DOPPLER_CONFIG: process.env.DOPPLER_CONFIG,
				DOPPLER_ENVIRONMENT: process.env.DOPPLER_ENVIRONMENT,
				DOPPLER_PROJECT: process.env.DOPPLER_PROJECT,
				NODE_ENV: process.env.NODE_ENV,
				VITE_API_BASE_URL: process.env.VITE_API_BASE_URL,
				VITE_APP_PORT: process.env.VITE_APP_PORT,
				VITE_APP_URL: process.env.VITE_APP_URL,
				VITE_BUGSNAG: process.env.VITE_BUGSNAG,
				VITE_GOOGLE_MAPS_API_KEY: process.env.VITE_GOOGLE_MAPS_API_KEY,
				VITE_LOGROCKET: process.env.VITE_LOGROCKET,
				VITE_MAPBOX_ACCESS_TOKEN: process.env.VITE_MAPBOX_ACCESS_TOKEN,
				VITE_PUSHER_CHANNEL: process.env.VITE_PUSHER_CHANNEL,
				VITE_PUSHER_KEY: process.env.VITE_PUSHER_KEY,
				GH_TOKEN: process.env.GH_TOKEN,
				TEST_LOGGING: process.env.TEST_LOGGING,
			},

			alias: {
				'@': '/src',
                fs: 'browserify-fs',
                path: 'path-browserify',
                os: 'os-browserify',
                crypto: 'crypto-browserify',
			},

			target: {
				browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
				node: 'node16',
			},
		},

		devServer:
			process.env.NODE_ENV !== 'production'
				? {
						host: process.env.VITE_APP_URL,
						// @ts-ignore
						port: +process.env.VITE_APP_PORT,
						https: {
							key: fs.readFileSync(`./${process.env.VITE_APP_URL}-key.pem`),
							cert: fs.readFileSync(`./${process.env.VITE_APP_URL}.pem`),
						},
				  }
				: { host: process.env.VITE_APP_URL },

		framework: {
			iconSet: 'fontawesome-v6',
			plugins: ['Notify'],
		},
	}
})
