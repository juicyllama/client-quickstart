import { Test, TestingModule } from '@nestjs/testing'
import { ConfigModule } from '@nestjs/config'
import { Env } from '@juicyllama/utils'
import { AppModule } from './app.module'
import { AnimalsModule } from './modules/animals/animals.module'

describe('App', () => {
	let moduleRef: TestingModule

	beforeAll(async () => {
		if (Env.IsNotTest()) {
			throw new Error(`Test suite should not be ran outside the test environment`)
		}

		moduleRef = await Test.createTestingModule({
			imports: [
				ConfigModule.forRoot({
					isGlobal: true,
				}),
				AppModule,
			],
		}).compile()
	}, 180000)
	it('should allow for the use of the AppModule', () => {
		expect(moduleRef.get(AnimalsModule, { strict: false })).toBeDefined()
	})
})