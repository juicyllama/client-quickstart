import 'module-alias/register'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { redocConfig, TypeOrmFilter, validationPipeOptions } from '@juicyllama/core'
import * as fs from 'fs'
import { join } from 'path'
import 'reflect-metadata'
import { Env, Enviroment, Logger, Strings } from '@juicyllama/utils'
import { RedocModule } from '@juicyllama/nestjs-redoc'
import { ANIMALS_NAME } from './modules/animals/animals.constants'

async function bootstrap() {
	let app

	const domain = 'apps::api::bootstrap'

	switch (Env.get()) {
		case Enviroment.development:
			const httpsOptions = {
				key: fs.readFileSync(
					join(__dirname, 'assets', `${process.env.BASE_URL_API.replace('https://', '')}-key.pem`),
				),
				cert: fs.readFileSync(
					join(__dirname, 'assets', `${process.env.BASE_URL_API.replace('https://', '')}.pem`),
				),
			}
			app = await NestFactory.create(AppModule, {
				logger: new Logger(),
				httpsOptions: httpsOptions,
				cors: true,
			})
			break

		default:
			app = await NestFactory.create(AppModule, {
				logger: new Logger(),
				cors: true,
			})
			break
	}

	const logger = new Logger()

	app.useGlobalPipes(new ValidationPipe(validationPipeOptions))
	app.useGlobalFilters(new TypeOrmFilter())

	try {
		const swagger_document = new DocumentBuilder()
			.setTitle('JuicyLlama Quickstart')
			.setVersion(process.env.npm_package_version)
			.addServer(process.env.BASE_URL_API, 'Live')
			//.addServer(`https://sandbox.${process.env.API_URL}`, 'Sandbox')
			.addBearerAuth()
			.build()

		const document = SwaggerModule.createDocument(app, swagger_document)
		let redoc = redocConfig

		const group = 'Animals'
		const tags = [Strings.capitalize(ANIMALS_NAME)]

		redoc.tagGroups.push({
			name: group,
			tags: tags,
		})

		await RedocModule.setup('', app, document, redoc)
	} catch (e) {
		logger.error(`[${domain}] ${e.message}`, e)
	}

	let port
	if (Env.IsProd()) {
		port = process.env.PORT || 3000
	} else {
		port = process.env.PORT_API
	}

	app.listen(port)
	logger.debug(`[${domain}]${Env.get()} server running: ${process.env.BASE_URL_API}:${port}`)
}

bootstrap()
