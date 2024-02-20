import { forwardRef, Module } from '@nestjs/common'
import { CacheModule } from '@nestjs/cache-manager'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import {
	cacheConfig,
	CoreModule,
	databaseConfig,
	jwtConfig,
	mongodbConfig,
	systemConfig,
	Query,
} from '@juicyllama/core'
import { Api, Logger, Poll } from '@juicyllama/utils'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AnimalsModule } from './modules/animals/animals.module'
import { AppController } from './app.controller';

@Module({
	imports: [
		JwtModule.register(jwtConfig()),
		ConfigModule.forRoot({
			load: [systemConfig, databaseConfig, jwtConfig, cacheConfig],
			isGlobal: true,
			envFilePath: '.env',
		}),
		CacheModule.registerAsync(cacheConfig()),
		TypeOrmModule.forRoot(databaseConfig()),
		TypeOrmModule.forRootAsync(mongodbConfig()),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, 'assets'),
		}),
		forwardRef(() => CoreModule),

		//Example Module
		forwardRef(() => AnimalsModule),
	],
	controllers: [AppController],
	providers: [Logger, Api, Poll, Query],
})
export class AppModule {}
