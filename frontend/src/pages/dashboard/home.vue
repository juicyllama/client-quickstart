<script setup lang="ts">
import { onMounted, computed } from 'vue'
import {useAnimalsStore} from '@/store/animals'
import AnimalForm from './components/animal.form.vue'
import AnimalList from './components/animal.list.vue'
const store = useAnimalsStore()

const stats = computed(() => store.stats)

onMounted(() => {
	store.fetchAnimals()
	store.fetchStats()
})

</script>

<template>
	<h1>Animals</h1>
	<p>Simple page showcasing loading and creating data for type `animals` using `JuicyLlama` components</p>
	<code>Currently there are {{ stats }} animals in the database.</code>

	<AnimalForm/>
	<AnimalList/>
</template>

<style scoped></style>
