<script lang="ts" setup>
import { JLUserProfile } from '@juicyllama/frontend-core'
import { formSettings } from '@/config/forms'
</script>

<template>
	<div class="q-pa-md">

		<Suspense>
				<JLUserProfile :form-settings='{
					...formSettings,
					hideBottomSpace: true,
					}' />
			</Suspense>
	</div>
</template>

<style scoped></style>
