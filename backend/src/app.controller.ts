import { Controller, Get, Header } from '@nestjs/common'
import { LazyModuleLoader } from '@nestjs/core'

import { Modules } from '@juicyllama/utils'

@Controller()
export class AppController {
	constructor(private readonly lazyModuleLoader: LazyModuleLoader) {}

	@Get()
	@Header('Content-Type', 'text/plain')
	async index() {
		try {
			if (Modules.aws.isInstalled) {
				const { AwsS3Module, AwsS3Service } = await Modules.aws.load()

				const awsS3Module = await this.lazyModuleLoader.load(() => AwsS3Module)

				console.log(awsS3Module)
			}

			return 'No error'
		} catch (e) {
			return `Error occurred: ${e.message}`
		}
	}
}
