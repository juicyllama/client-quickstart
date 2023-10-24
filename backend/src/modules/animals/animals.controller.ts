import {
	Controller,
	forwardRef,
	Inject,
	Body,
	Query,
	Param
} from '@nestjs/common'
import { AnimalsService } from './animals.service'
import {
	crudCreate,
	crudFindAll,
	crudFindOne,
	crudStats,
	crudCharts,
	crudUpdate,
	crudDelete,
	Query as TQuery,
	UserAuth,
	CreateDecorator,
	ReadManyDecorator,
	ReadOneDecorator,
	ReadStatsDecorator,
	ReadChartsDecorator,
	UpdateDecorator,
	DeleteDecorator,
} from '@juicyllama/core'
import { ChartsPeriod, ChartsResponseDto, StatsMethods, StatsResponseDto, Strings } from '@juicyllama/utils'
import { ANIMALS_E, ANIMALS_NAME, ANIMALS_ORDER_BY, ANIMALS_PRIMARY_KEY, ANIMALS_SEARCH_FIELDS, ANIMALS_T } from './animals.constants'
import { CreateAnimalDto, UpdateAnimalDto } from './animals.dto'
import { AnimalsOrderBy, AnimalsRelations, AnimalsSelect } from './animals.enums'
import { ApiTags } from '@nestjs/swagger'

@UserAuth()
@ApiTags(Strings.capitalize(ANIMALS_NAME))
@Controller(`/${ANIMALS_NAME}`)
export class AnimalsController {
	constructor(
		@Inject(forwardRef(() => AnimalsService)) private readonly service: AnimalsService,
		@Inject(forwardRef(() => TQuery)) private readonly tQuery: TQuery<ANIMALS_T>,
	) {}

	@CreateDecorator(ANIMALS_E, ANIMALS_NAME)
	async create(@Body() data: CreateAnimalDto): Promise<ANIMALS_T> {
    	return await crudCreate<ANIMALS_T>({
        	service: this.service,
        	data: data,
		})
	}

	@ReadManyDecorator(ANIMALS_E, AnimalsSelect, AnimalsOrderBy, AnimalsRelations, ANIMALS_NAME)
	async findAll(@Query() query): Promise<ANIMALS_T[]> {
		return await crudFindAll<ANIMALS_T>({
			service: this.service,
			tQuery: this.tQuery,
			query: query,
			searchFields: ANIMALS_SEARCH_FIELDS,
			order_by: ANIMALS_ORDER_BY,
		})
	}

	@ReadOneDecorator(ANIMALS_E, ANIMALS_PRIMARY_KEY, AnimalsSelect, AnimalsRelations, ANIMALS_NAME)
	async findOne(@Param() params, @Query() query): Promise<ANIMALS_T> {
		return await crudFindOne<ANIMALS_T>({
			service: this.service,
			query: query,
			primaryKey: params[ANIMALS_PRIMARY_KEY],
		})
	}

	@ReadStatsDecorator(ANIMALS_NAME)
		async stats(
			@Query() query,
			@Query('method') method?: StatsMethods,
		): Promise<StatsResponseDto> {
			return await crudStats<ANIMALS_T>({
				service: this.service,
				tQuery: this.tQuery,
				query: query,
				method: method,
				searchFields: ANIMALS_SEARCH_FIELDS,
			})
		}

	@ReadChartsDecorator(ANIMALS_E, AnimalsSelect, ANIMALS_NAME)
	async charts(
		@Query() query: any,
		@Query('search') search: string,
		@Query('from') from: string,
		@Query('to') to: string,
		@Query('fields') fields: string[],
		@Query('period') period?: ChartsPeriod,
	): Promise<ChartsResponseDto> {
		return await crudCharts<ANIMALS_T>({
			service: this.service,
			tQuery: this.tQuery,
			query,
			search,
			period,
			fields,
			...(from && { from: new Date(from) }),
			...(to && { to: new Date(to) }),
			searchFields: ANIMALS_SEARCH_FIELDS,
		})
	}

	@UpdateDecorator(ANIMALS_E, ANIMALS_NAME)
	async update(@Param() params, @Body() data: UpdateAnimalDto): Promise<ANIMALS_T> {
		return await crudUpdate<ANIMALS_T>({
			service: this.service,
			primaryKey: params[ANIMALS_PRIMARY_KEY],
			data: data,
		})
	}

	@DeleteDecorator(ANIMALS_E, ANIMALS_NAME)
	async delete(@Param() params): Promise<ANIMALS_T> {
		return await crudDelete<ANIMALS_T>({
			service: this.service,
			primaryKey: params[ANIMALS_PRIMARY_KEY]
		})
	}

}