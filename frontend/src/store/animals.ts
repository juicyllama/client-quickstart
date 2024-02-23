import { defineStore } from 'pinia'
import { ref } from 'vue'
import {AnimalService} from '@/services/animals'

export const useAnimalsStore = defineStore('animals', () => {
    const animalsList = ref([])
    const stats = ref({})
    const URL = '/animals'
    const service = new AnimalService(URL)

    const fetchAnimals = async () => {
        animalsList.value = await service.findAll()
    }

    const fetchStats = async () => {
        stats.value = await service.stats()
    }

    const createAnimal = async (data) => {
        await service.create({
            data
        })
    }

    return {
        animalsList,
        fetchAnimals,
        createAnimal,
        fetchStats,
        stats
    }
  })
