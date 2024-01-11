<script lang="ts" setup>
import { JLUsersTable } from '@juicyllama/frontend-core'
import { iconSettings } from '@/config/icons'
import { formSettings } from '@/config/forms'
const visibleColumns = ['user_id', 'first_name', 'last_name', 'email', 'roles', 'last_login_at']
</script>

<template>
	<div class="q-pa-md">
		<Suspense>
			<JLUsersTable :visibleColumns='visibleColumns' :icon='iconSettings' :form-settings='formSettings'></JLUsersTable>
		</Suspense>
	</div>
</template>

<style scoped></style>
