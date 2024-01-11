<script lang="ts" setup>
import { JLAccountProfile } from '@juicyllama/frontend-core'
import { formSettings } from '@/config/forms'

</script>

<template>
	<div class='main'>
		<Suspense>
			<JLAccountProfile :form-settings='{
					...formSettings,
					hideBottomSpace: true,
					}' />
		</Suspense>
	</div>
</template>

<style scoped></style>
