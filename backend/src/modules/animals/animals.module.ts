import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'
import { Logger } from '@juicyllama/utils'
import {
	Account,
	BeaconModule,
	databaseConfig,
	jwtConfig,
	Query,
	Role,
	Tag,
	User,
} from '@juicyllama/core'
import { Animal } from './animals.entity'
import { AnimalsService } from './animals.service'
import { AnimalsController } from './animals.controller'

@Module({
	imports: [
		JwtModule.register(jwtConfig()),
		TypeOrmModule.forRoot(databaseConfig()),
		//TypeOrmModule.forFeature([Animal]), //awaiting fix as per https://github.com/juicyllama/framework/issues/70 
		TypeOrmModule.forFeature([Animal, User, Account, Tag, Role]),
		forwardRef(() => BeaconModule),
	],
	controllers: [AnimalsController],
	providers: [AnimalsService, Logger, Query],
	exports: [AnimalsService],
})
export class AnimalsModule {}
