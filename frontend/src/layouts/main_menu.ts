import { getCssVar } from 'quasar'

const $grey = getCssVar('grey-8')

export const MainMenu = [
	{
		title: 'Dashboard',
		caption: '',
		icon: 'fa-thin fa-table-columns',
		link: '/dashboard',
		icon_color: 'black',
		text_color: $grey,
	},
]
