import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'
import { Logger } from '@juicyllama/utils'
import {
	BeaconModule,
	databaseConfig,
	jwtConfig,
	Query,
} from '@juicyllama/core'
import { Animal } from './animals.entity'
import { AnimalsService } from './animals.service'
import { AnimalsController } from './animals.controller'

@Module({
	imports: [
		JwtModule.register(jwtConfig()),
		TypeOrmModule.forRoot(databaseConfig()),
		TypeOrmModule.forFeature([Animal]),
		forwardRef(() => BeaconModule),
	],
	controllers: [AnimalsController],
	providers: [AnimalsService, Logger, Query],
	exports: [AnimalsService],
})
export class AnimalsModule {}
