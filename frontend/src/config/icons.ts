import { IconSettings } from '@juicyllama/frontend-core'

export function getIcon(name: string): string {
	return iconSettings.icons[name] ?? name
}

export const iconSettings: IconSettings = {
	type: '',
	icons: {
		add: 'add',
		edit: 'edit',
		delete: 'delete',
		search: 'search',
		columns: 'view_week',
		profile: 'account_circle',
		users: 'people',
		billing: 'credit_card',
		admin: 'settings',
		settings: 'settings',
		home: 'house',
		menu_seperator: 'chevron_right',
		mobile_nav: 'menu',
		dashboard: 'monitor'
	},
}


