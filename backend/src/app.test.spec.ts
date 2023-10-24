import { Enviroment } from '@juicyllama/utils'

describe('Test Suite', () => {
	beforeAll(async () => {
		if (Enviroment[process.env.NODE_ENV] !== Enviroment.test) {
			throw new Error(`Test suite should not be ran outside the test environment`)
		}
	})

	describe('Coming Soon..', () => {
		it('Holding test', async () => {
			//do something
		})
	})

	afterAll(async () => {})
})
