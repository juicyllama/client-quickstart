<script setup lang="ts">
	import { AuthHook, userStore } from '@juicyllama/frontend-core'
	import { identifyLogrocket } from '@/plugins/logrocket'
	import { identifyBugsnag } from '@/plugins/bugsnag'

	AuthHook()
	identifyLogrocket(userStore.user)
	identifyBugsnag(userStore.user)
</script>

<template>
	<div>Home</div>
</template>

<style scoped></style>
