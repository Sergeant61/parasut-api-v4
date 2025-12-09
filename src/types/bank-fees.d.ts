// Bank Fee Types

type BankFeeAttributes = {
  name?: string
  amount?: number
  currency?: string
  fee_date?: string
  archived?: boolean
  created_at?: string
  updated_at?: string
}

type BankFeeData = {
  id?: string
  type: 'bank_fees'
  attributes: BankFeeAttributes
}

type BankFeeRequest = {
  data: BankFeeData
}

type BankFeeResponse = {
  data: {
    id: string
    type: 'bank_fees'
    attributes: BankFeeAttributes
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type BankFeeIndexResponse = {
  data: Array<{
    id: string
    type: 'bank_fees'
    attributes: BankFeeAttributes
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

type BankFeeQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}

