<script setup lang='ts'>
import { Logout, userStore } from '@juicyllama/frontend-core'
import type { User } from '@juicyllama/frontend-core'
const user: User = userStore.user
</script>

<template>
	<q-menu>
		<div class="row no-wrap q-pa-md">
			<div class="column">
				<div class="text-h6 q-mb-md">Settings</div>
				<q-toggle v-model="mobileData" label="Use Mobile Data" />
				<q-toggle v-model="bluetooth" label="Bluetooth" />
			</div>

			<q-separator vertical inset class="q-mx-lg" />

			<div class="column items-center">
				<q-avatar size="72px">
					<img src="https://cdn.quasar.dev/img/avatar4.jpg" />
				</q-avatar>

				<div class="text-subtitle2 q-mt-md q-mb-xs">{{ user.first_name }} {{ user.last_name }}</div>

				<q-btn color="primary" label="Logout" @click='Logout' push size="sm" v-close-popup />
			</div>
		</div>
	</q-menu>
</template>



<style scoped>

</style>
