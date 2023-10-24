import { AnimalsController } from "./animals.controller"
import { Animal } from "./animals.entity"
import { AnimalsModule } from "./animals.module"
import { AnimalsService } from "./animals.service"

export const ANIMALS_E = Animal
export type ANIMALS_T = Animal
export const ANIMALS_NAME = 'animals'
export const ANIMALS_PRIMARY_KEY = 'animal_id'
export const ANIMALS_ENDPOINT_URL = '/animals'
export const ANIMALS_MODULE = AnimalsModule
export const ANIMALS_CONTROLLER = AnimalsController
export const ANIMALS_SERVICE = AnimalsService

export const ANIMALS_SEARCH_FIELDS = ['name', 'type']
export const ANIMALS_ORDER_BY = 'created_at'