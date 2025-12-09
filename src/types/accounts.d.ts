// Account Types

type AccountAttributes = {
  name: string
  currency?: string
  account_type?: string
  account_exemption_type?: string
  tax_number?: string
  tax_office?: string
  balance?: number
  trl_balance?: number
  usd_balance?: number
  eur_balance?: number
  gbp_balance?: number
  bank_name?: string
  bank_branch?: string
  bank_account_no?: string
  iban?: string
  archived?: boolean
  created_at?: string
  updated_at?: string
}

type AccountRelationships = {
  category?: {
    data?: {
      id: string
      type: string
    }
  }
  parent?: {
    data?: {
      id: string
      type: string
    }
  }
}

type AccountData = {
  id?: string
  type: 'accounts'
  attributes: AccountAttributes
  relationships?: AccountRelationships
}

type AccountRequest = {
  data: AccountData
}

type AccountResponse = {
  data: {
    id: string
    type: 'accounts'
    attributes: AccountAttributes
    relationships?: AccountRelationships
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type AccountIndexResponse = {
  data: Array<{
    id: string
    type: 'accounts'
    attributes: AccountAttributes
    relationships?: AccountRelationships
  }>
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
  meta?: {
    current_page?: number
    total_pages?: number
    total_count?: number
  }
}

type AccountQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}

type AccountTransactionRequest = {
  data: {
    description?: string
    transaction_date?: string
    amount?: number
    currency?: string
    exchange_rate?: number
    debit_account_id?: string
    credit_account_id?: string
  }
}
