import { IsEnum, IsNumber, IsString } from 'class-validator'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity, User } from '@juicyllama/core'
import { AnimalType } from './animals.enums'

@Entity('animals')
export class Animal extends BaseEntity {

	@PrimaryGeneratedColumn()
	@IsNumber()
	readonly animal_id: number

	@Column()
	@IsString()
	name: string

	@Column()
    @IsEnum(AnimalType)
    type: AnimalType

    @ManyToOne(() => User, user => user.user_id, {
		onDelete: 'SET NULL'
	})
	@JoinColumn({ name: 'user_id' })
	owner?: User

    @Column()
	@IsNumber()
	owner_id: number

	constructor(partial: Partial<Animal>) {
		super()
		Object.assign(this, partial)
	}
}
