import { forwardRef, Module } from '@nestjs/common'
import { CacheModule } from '@nestjs/cache-manager'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import {
	AuthModule,
	cacheConfig,
	CoreModule,
	databaseConfig,
	jwtConfig,
	mongodbConfig,
	Query,
} from '@juicyllama/core'
import { Api, Logger, Poll, Env } from '@juicyllama/utils'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AnimalsModule } from './modules/animals/animals.module'

@Module({
	imports: [
		JwtModule.register(jwtConfig()),
		ConfigModule.forRoot({
			load: [databaseConfig, jwtConfig, cacheConfig],
			isGlobal: true,
			envFilePath: '.env'
		}),
		CacheModule.registerAsync(cacheConfig()),
		TypeOrmModule.forRoot(databaseConfig()),
		TypeOrmModule.forRootAsync(mongodbConfig()),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, 'assets'),
		}),
		forwardRef(() => AuthModule),
		forwardRef(() => CoreModule),

		//Example Module
		forwardRef(() => AnimalsModule)
	],
	controllers: [],
	providers: [Logger, Api, Poll, Query],
})
export class AppModule {}
