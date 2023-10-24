import { IsEnum, IsNumber, IsString } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'
import { AnimalType } from './animals.enums'

export class AnimalDto {

	@IsString()
	name: string

	@IsEnum(AnimalType)
	type: AnimalType

	@IsNumber()
	owner_id: number

}

export class CreateAnimalDto extends AnimalDto {}

export class UpdateAnimalDto extends PartialType(AnimalDto) {}
