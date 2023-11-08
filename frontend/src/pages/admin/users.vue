<script lang="ts" setup>
import { JLUsersTable, goToAdmin } from '@juicyllama/frontend-core'
import { useRouter } from 'vue-router'

const router = useRouter()
const goAdmin = () => goToAdmin(router)
</script>

<template>
	<div class="q-pa-md">

		<q-breadcrumbs class="text-grey q-pl-lg q-pa-sm" active-color="primary">
			<template v-slot:separator>
				<q-icon
					size="0.6em"
					name="fa-duotone fa-chevron-right"
					color="primary"
				/>
			</template>

			<q-breadcrumbs-el label="Settings" icon="fa-duotone fa-cog" @click='goAdmin' class='cursor-pointer' />
			<q-breadcrumbs-el label="Users" icon="fa-duotone fa-users" />
		</q-breadcrumbs>

		<Suspense>
			<JLUsersTable></JLUsersTable>
		</Suspense>
	</div>
</template>

<style scoped></style>
