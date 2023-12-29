import { IsEnum, IsNumber, IsString } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'
import { AnimalType } from './animals.enums'
import { Classes } from '@juicyllama/utils'
import { BaseResponseDto, SwaggerPropertyDecorator, SwaggerPropertyType } from '@juicyllama/core'

export class AnimalDto {

	@SwaggerPropertyDecorator({ description: 'The name of your animal', example: 'Jerry', type: SwaggerPropertyType.STRING })
	@IsString()
	name: string

	@SwaggerPropertyDecorator({ description: 'The type of your animal', example: AnimalType.mouse, type: SwaggerPropertyType.ENUM, enum: AnimalType  })
	@IsEnum(AnimalType)
	type: AnimalType

	@SwaggerPropertyDecorator({ description: 'The owner ID', example: 1, type: SwaggerPropertyType.NUMBER  })
	@IsNumber()
	owner_id: number

}

export class CreateAnimalDto extends AnimalDto {}

export class UpdateAnimalDto extends PartialType(AnimalDto) {}

export class AnimalResponeDto extends Classes.ExtendsMultiple([AnimalDto, BaseResponseDto]) {
	
	@SwaggerPropertyDecorator({ description: 'The animal ID', example: 1, type: SwaggerPropertyType.NUMBER })
	readonly animal_id: number

}
