import { DeepPartial } from 'typeorm'
import { Animal } from './animals.entity'
import { User } from '@juicyllama/core'
import { AnimalType } from './animals.enums'

type T = Animal

export const animalsMock = (owner: User): DeepPartial<T[]> => {
	return [
		{
			name: 'Tom',
			type: AnimalType.cat,
			owner_id: owner.user_id,
		},
		{
			name: 'Jerry',
			type: AnimalType.mouse,
			owner_id: owner.user_id,
		},
		{
			name: 'Spike',
			type: AnimalType.dog,
			owner_id: owner.user_id,
		},
		{
			name: 'Tweety',
			type: AnimalType.bird,
			owner_id: owner.user_id,
		},
		{
			name: 'Nemo',
			type: AnimalType.fish,
			owner_id: owner.user_id,
		},
	]
}
