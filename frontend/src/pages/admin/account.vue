<script lang="ts" setup>
import { JLAccountProfile, goToAdmin } from '@juicyllama/frontend-core'
import { useRouter } from 'vue-router'
import { iconSettings } from '@/config/icons'

const router = useRouter()
const goAdmin = () => goToAdmin(router)
</script>

<template>
	<div class='main'>
		<q-breadcrumbs class="text-grey q-pb-md" active-color="primary">
			<template v-slot:separator>
				<q-icon
					:name="iconSettings?.icons?.menu_seperator ? `${iconSettings.type} ${iconSettings.icons.menu_seperator}` : 'chevron_right'"
				/>
			</template>

			<q-breadcrumbs-el label="Settings" :icon="iconSettings?.icons?.settings ? `${iconSettings.type} ${iconSettings.icons.settings}` : 'cog'" @click='goAdmin' class='cursor-pointer' />
			<q-breadcrumbs-el label="Account" :icon="iconSettings?.icons?.users ? `${iconSettings.type} ${iconSettings.icons.users}` : 'users'" />
		</q-breadcrumbs>

		<Suspense>
			<JLAccountProfile />
		</Suspense>
	</div>
</template>

<style scoped></style>
