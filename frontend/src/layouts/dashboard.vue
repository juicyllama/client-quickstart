<script setup lang="ts">
import { Ref, ref, computed, watch, onMounted } from 'vue'
import {
	JLAccountSwitcher,
	JLUserAvatar,
	themeStore,
	JLMenu,
	JLAccountBrand,
	GlobalSubscriptionHook,
	AuthHook,
	userStore,
	accountStore,
	UserAvatarOptions,
	Menu,
} from '@juicyllama/frontend-core'
import { useRoute } from 'vue-router'
import { MainMenu } from '@/layouts/main_menu'

AuthHook()

onMounted(() => {
	GlobalSubscriptionHook(process.env)
})

const currentRoute = computed(() => {
	return useRoute().name
})

const isAdmin = userStore.isAdmin(accountStore.getAccountId)

const userAvatarSettings = <UserAvatarOptions>{
	clickToMenu: true,
	avatar: {
		size: '32px',
		text_color: 'white',
	},
	menu: {
		show: {
			profile: true,
			billing: false,
			admin: isAdmin,
		},
		avatar: {
			size: '48px',
			text_color: 'white',
		},
		icon: {
			type: 'fa-thin',
		},
	},
}

const leftDrawerOpen: Ref<boolean> = ref(themeStore.left_draw)

function toggleLeftDrawer() {
	leftDrawerOpen.value = !leftDrawerOpen.value
}

watch(
	() => leftDrawerOpen.value,
	(newValue: boolean) => {
		themeStore.setLeftDraw(newValue)
	},
)

const menu: Menu = {
	items: MainMenu,
}
</script>

<template>
	<q-layout view="lhh lpR lfr">
		<q-header class="q-pa-md">
			<q-toolbar>
				<q-btn flat icon="fa-duotone fa-bars" @click="toggleLeftDrawer" v-if="!leftDrawerOpen" />

				<span class="text-h6 q-ml-md">{{ currentRoute }}</span>

				<q-toolbar-title>
					<!-- todo add search bar here -->
				</q-toolbar-title>

				<Suspense>
					<JLUserAvatar
						:clickToMenu="userAvatarSettings.clickToMenu"
						:clickToEdit="userAvatarSettings.clickToEdit"
						:avatar="userAvatarSettings.avatar"
						:menu="userAvatarSettings.menu" />
				</Suspense>
			</q-toolbar>
		</q-header>

		<q-drawer v-model="leftDrawerOpen" side="left" :width="250">
			<div class="q-pt-lg q-ml-md">
				<Suspense>
					<JLAccountSwitcher class="q-mb-md" style="max-width: 90%"></JLAccountSwitcher>
				</Suspense>

				<JLAccountBrand class="q-mb-md" style="max-width: 90%" />

				<JLMenu :menu="menu" class="q-mb-xs" />
			</div>
		</q-drawer>

		<q-page-container class="window-height q-ml-xl q-mr-xl">
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<style>
.q-btn .q-icon,
.q-btn .q-spinner {
	font-size: 1em;
}
</style>
