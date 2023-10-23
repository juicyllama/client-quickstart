import { Api } from '@juicyllama/frontend-core'
import type { ClientBillingSubscription } from '@/types/clients/billing.types'

type T = ClientBillingSubscription
export class ClientBillingSubscriptionService extends Api<T> {}
