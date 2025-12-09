// Transaction Types

type TransactionAttributes = {
  description?: string
  transaction_date?: string
  amount?: number
  currency?: string
  exchange_rate?: number
  created_at?: string
  updated_at?: string
}

type TransactionRelationships = {
  debit_account?: {
    data?: {
      id: string
      type: string
    }
  }
  credit_account?: {
    data?: {
      id: string
      type: string
    }
  }
  contact?: {
    data?: {
      id: string
      type: string
    }
  }
}

type TransactionData = {
  id?: string
  type: 'transactions'
  attributes: TransactionAttributes
  relationships?: TransactionRelationships
}

type TransactionResponse = {
  data: {
    id: string
    type: 'transactions'
    attributes: TransactionAttributes
    relationships?: TransactionRelationships
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type TransactionQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}
