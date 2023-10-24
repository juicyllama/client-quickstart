import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BaseService, BeaconService, Query} from '@juicyllama/core'
import { Logger } from '@juicyllama/utils'
import { Animal } from './animals.entity'

const E = Animal
type T = Animal

@Injectable()
export class AnimalsService extends BaseService<T> {
	constructor(
		@Inject(forwardRef(() => Query)) readonly query: Query<T>,
		@InjectRepository(E) readonly repository: Repository<T>,
		@Inject(forwardRef(() => BeaconService)) readonly beaconService: BeaconService,
		@Inject(forwardRef(() => Logger)) readonly logger: Logger,
	) {
		super(query, repository, {
			beacon: beaconService,
		})
	}
}
