import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Logger } from '@juicyllama/utils'
import {
	AuthModule,
	BeaconModule,
	Query,
} from '@juicyllama/core'
import { Animal } from './animals.entity'
import { AnimalsService } from './animals.service'
import { AnimalsController } from './animals.controller'

@Module({
	imports: [
		TypeOrmModule.forFeature([Animal]),
		forwardRef(() => AuthModule),
		forwardRef(() => BeaconModule),
	],
	controllers: [AnimalsController],
	providers: [AnimalsService, Logger, Query],
	exports: [AnimalsService],
})
export class AnimalsModule {}
