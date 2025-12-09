// Tax Types

type TaxAttributes = {
  name: string
  rate?: number
  archived?: boolean
  created_at?: string
  updated_at?: string
}

type TaxData = {
  id?: string
  type: 'taxes'
  attributes: TaxAttributes
}

type TaxRequest = {
  data: TaxData
}

type TaxResponse = {
  data: {
    id: string
    type: 'taxes'
    attributes: TaxAttributes
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type TaxIndexResponse = {
  data: Array<{
    id: string
    type: 'taxes'
    attributes: TaxAttributes
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

type TaxQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}
