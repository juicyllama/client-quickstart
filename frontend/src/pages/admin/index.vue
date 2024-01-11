<script lang="ts" setup>
import { goToAdminUsers, goToEditAccount } from '@juicyllama/frontend-core'
import { useRouter } from 'vue-router'
import { getIcon } from '@/config/icons'

const iconSize = '3em'
const router = useRouter()
const goEditAccount = () => goToEditAccount(router)
const goAdminUsers = () => goToAdminUsers(router)

const settings = [
	{
		icon: 'account',
		label: 'Account Settings',
		action: goEditAccount,
	},
	{
		icon: 'users',
		label: 'Manage Users',
		action: goAdminUsers,
	},
]

</script>

<template>
	<div class='main'>

		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
	
			<div v-for="setting in settings" :key="setting.icon">
				<a href="#" @click='setting.action'>
					<q-card class='q-pa-lg justify-center cursor-pointer' @click='setting.action'>
						<q-card-section class='flex flex-center'>
							<q-icon :name="getIcon(setting.icon)" color="primary" :size="iconSize"/>
						</q-card-section>
						<q-card-actions class='flex flex-center'>
							<p class="text-primary uppercase">{{ setting.label }}</p>
						</q-card-actions>
					</q-card>
				</a>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
