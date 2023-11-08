<script lang="ts" setup>
import { goToAdminUsers, goToEditAccount } from '@juicyllama/frontend-core'
import { useRouter } from 'vue-router'

const router = useRouter()
const goEditAccount = () => goToEditAccount(router)
const goAdminUsers = () => goToAdminUsers(router)
</script>

<template>
	<div class='main'>

		<div class="row" >
			<div class="col-4 q-pl-md q-pr-md">
				<q-card class='q-pa-lg justify-center cursor-pointer' @click='goEditAccount'>
					<q-card-section class='flex flex-center'>
						<q-icon name="fa-duotone fa-screwdriver-wrench" color="primary" size="5em"/>
					</q-card-section>
					<q-card-actions class='flex flex-center'>
						<q-btn flat>Account Settings</q-btn>
					</q-card-actions>
				</q-card>
			</div>
			<div class="col-4 q-pl-md q-pr-md">
				<q-card class='q-pa-lg justify-center cursor-pointer' @click='goAdminUsers'>
					<q-card-section class='flex flex-center'>
						<q-icon name="fa-duotone fa-users" color="primary" size="5em"/>
					</q-card-section>
					<q-card-actions class='flex flex-center'>
						<q-btn flat>Manage Users</q-btn>
					</q-card-actions>
				</q-card>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
