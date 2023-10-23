import { SupportedCurrencies, SubscriptionFrequency } from '@juicyllama/vue-utils'
import { Account } from '@juicyllama/frontend-core'

export interface ClientBillingSubscription {
	client_subscription_id?: number
	account?: Account
	name: string
	description?: string
	amount: number
	currency: SupportedCurrencies
	frequency: SubscriptionFrequency
	tags?: string[]
	next_rebill_at?: Date
}

export interface ClientBillingCharges {
	client_charge_id?: number
	account?: Account
	name: string
	description: string
	amount: number
	currency: SupportedCurrencies
	tags?: string[]
	is_approved?: boolean
	is_charged?: boolean
	created_at?: Date
}

export interface ClientBillingHours {
	name: string
	description?: string
	hours: number
}
