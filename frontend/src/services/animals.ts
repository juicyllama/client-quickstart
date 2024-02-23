import { Api } from '@juicyllama/frontend-core'

type T = {
    name: string
    animal_id: number
}
export class AnimalService extends Api<T> {}
