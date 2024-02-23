<script setup lang="ts">
import { reactive } from 'vue'
import {useAnimalsStore} from '@/store/animals'
import { JLForm, FormFieldField, FormFieldType, FormFieldButtonType  } from '@juicyllama/frontend-core'
import {AnimalType} from '../../../../../backend/src/modules/animals/animals.enums'

const store = useAnimalsStore()

const createAnimal = async (data: object) => {
	await store.createAnimal(data)
	store.fetchAnimals()
    store.fetchStats()
}

const formOptions = {
	type: 'edit',
	name: 'user',
	fields: reactive([
	{
		key: 'name',
		field: FormFieldField.INPUT,
		type: FormFieldType.TEXT,
		required: true,
		label: 'Animal name',
		add: true,
		edit: true,
	},{
		key: 'owner_id',
		field: FormFieldField.INPUT,
		type: FormFieldType.NUMBER,
		required: true,
		label: 'Owner ID',
		add: true,
		edit: true,
	},{
		key: 'type',
		field: FormFieldField.DROPDOWN,
		type: FormFieldType.TEXT,
		required: true,
		label: 'Type',
		add: true,
		edit: true,
		dropdown: Object.keys(AnimalType).map((key) => ({
		value: key,
		label: key
	}))
	},{
	key: 'save_button',
	field: FormFieldField.BUTTON,
	buttons: [{
		type: FormFieldButtonType.SUBMIT,
		icon: {
			name: 'save',
			type: ''
		},
	}],
	label: 'Save'
	}
	]),
}
</script>

<template>
<JLForm
    :options="formOptions"
    @submittedForm="createAnimal"></JLForm>
</template>
