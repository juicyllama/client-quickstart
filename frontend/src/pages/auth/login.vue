<script lang="ts" setup>
import { JLLogin } from '@juicyllama/frontend-core'

const google = Boolean(import.meta.env.VITE_SSO_GOOGLE)
const facebook = Boolean(import.meta.env.VITE_SSO_FACEBOOK)
const linkedin = Boolean(import.meta.env.VITE_SSO_LINKEDIN)

</script>

<template>
	<q-layout view="lHh Lpr fff">
		<q-page class="window-height window-width row justify-center items-center">
			<div class="column q-pa-lg">
				<div class="row">
					<q-card square class="auth-card">
						<q-card-section class="bg-primary"></q-card-section>
						<q-card-section>
							<JLLogin :google='google' :facebook='facebook' :linkedin='linkedin'></JLLogin>
						</q-card-section>
					</q-card>
				</div>
			</div>
		</q-page>
	</q-layout>
</template>

<style scoped></style>
