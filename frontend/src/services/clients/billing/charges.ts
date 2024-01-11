import { Api, apiRequest, logger, LogSeverity } from '@juicyllama/frontend-core'
import type { ClientBillingCharges } from '@/types/clients/billing.types'
import { ClientBillingHours } from '@/types/clients/billing.types'
import { QVueGlobals } from 'quasar'

const url = 'clients/billing/charges'
type T = ClientBillingCharges

export class ClientBillingChargesService extends Api<T> {
	async findAll(): Promise<T[]> {
		return await super.findAll({
			url: url,
			find: {
				is_approved: 'EQ:0',
			},
		})
	}

	async stats(): Promise<number> {
		return await super.stats({
			url: url,
			method: 'COUNT',
			find: {
				is_approved: 'EQ:0',
			},
		})
	}

	async logHours(options: { formData: ClientBillingHours; q?: QVueGlobals }): Promise<T> {
		options.formData.hours = Number(options.formData.hours)

		return apiRequest<T>({
			url: url + `/hours`,
			method: 'POST',
			data: options.formData,
			q: options.q,
		})
	}

	async approve(options: { q?: QVueGlobals }): Promise<void> {
		try {
			await apiRequest<T>({
				url: url + `/approve`,
				method: 'POST',
			})
			logger({
				severity: LogSeverity.LOG,
				message: `Successfully approved charges`,
				q: options.q,
			})
		} catch (e: any) {
			logger({
				severity: LogSeverity.ERROR,
				message: <string>e.response?.data?.message ?? e.message,
				q: options.q,
			})
		}
	}
}
