<script lang="ts" setup>
import { goToDashboard, JLUserProfile } from '@juicyllama/frontend-core'

import { useRouter } from 'vue-router'
const router = useRouter()
const goDashboard = () => goToDashboard(router)
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

			<q-breadcrumbs-el label="Home" icon="fa-duotone fa-home" @click='goDashboard' class='cursor-pointer' />
			<q-breadcrumbs-el label="Profile" icon="fa-duotone fa-user" />
		</q-breadcrumbs>

		<div class='q-pa-md'>
			<Suspense>
				<JLUserProfile />
			</Suspense>
		</div>
	</div>
</template>

<style scoped></style>
