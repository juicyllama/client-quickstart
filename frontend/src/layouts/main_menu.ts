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
	{
		title: 'Workflow',
		caption: '',
		icon: 'fa-thin fa-rectangle-terminal',
		link: '/work',
		icon_color: 'black',
		text_color: $grey,
	},
	{
		title: 'Discussions',
		caption: '',
		icon: 'fa-thin fa-messages',
		link: '/discuss',
		icon_color: 'black',
		text_color: $grey,
	},
	{
		title: 'Changelog',
		caption: '',
		icon: 'fa-thin fa-code-pull-request',
		link: '/changelog',
		icon_color: 'black',
		text_color: $grey,
	},
	{
		title: 'Billing',
		caption: '',
		icon: 'fa-thin fa-file-invoice-dollar',
		link: '/billing',
		icon_color: 'black',
		text_color: $grey,
	},
]
