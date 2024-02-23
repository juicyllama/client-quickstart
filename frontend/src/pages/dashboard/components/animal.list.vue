<script setup lang="ts">
import { computed } from 'vue'
import {useAnimalsStore} from '@/store/animals'
import { JLTable } from '@juicyllama/frontend-core'
import type { TableSchema } from '@juicyllama/frontend-core'
const store = useAnimalsStore()

const animalsList = computed(() => store.animalsList)

const options:TableSchema = {
    title: 'Animals',
    name: 'Animals',
    endpoint: `/animals`,
    find: [],
    functions: [],
    schema: [
        {
            required: true,
            label: 'User #',
            align: 'left',
            name: 'owner_id',
            field: 'owner_id',
            sortable: true,
            show: true,
            primary_key: true,
        },
    ],
}

const visibleColumns = ['owner_id', 'name', 'type']
</script>

<template>
	<h3>Simple list</h3>
	<ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
		<li class="pb-3 sm:pb-4" v-for="a in animalsList" :key="a">
			<div class="flex items-center space-x-4 rtl:space-x-reverse">
				<div class="flex-1 min-w-0">
					<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
					{{ a.name }}
					</p>
					<p class="text-sm text-gray-500 truncate dark:text-gray-400">
					{{ a.owner_id }}
					</p>
				</div>
				<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
					{{ a.type }}
				</div>
			</div>
		</li>
	</ul>

	<h3>JLTable</h3>
	<JLTable :options="options" :visibleColumns="visibleColumns" />
</template>
