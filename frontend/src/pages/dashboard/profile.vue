<script lang="ts" setup>
import { goToDashboard, JLUserProfile } from '@juicyllama/frontend-core'
import { iconSettings } from '@/config/icons'

import { useRouter } from 'vue-router'
const router = useRouter()
const goDashboard = () => goToDashboard(router)
</script>

<template>
	<div class="q-pa-md">

		<q-breadcrumbs class="text-grey q-pl-lg q-pa-sm" active-color="primary">
			<template v-slot:separator>
				<q-icon
					:name="iconSettings?.icons?.menu_seperator ? `${iconSettings.type} ${iconSettings.icons.menu_seperator}` : 'chevron_right'"
				/>
			</template>

			<q-breadcrumbs-el label="Home" :icon="iconSettings?.icons?.home ? `${iconSettings.type} ${iconSettings.icons.home}` : 'house'" @click='goDashboard' class='cursor-pointer' />
			<q-breadcrumbs-el label="Profile" :icon="iconSettings?.icons?.profile ? `${iconSettings.type} ${iconSettings.icons.profile}` : 'person'" />
		</q-breadcrumbs>

		<div class='q-pa-md'>
			<Suspense>
				<JLUserProfile />
			</Suspense>
		</div>
	</div>
</template>

<style scoped></style>
