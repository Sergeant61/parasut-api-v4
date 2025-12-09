// Stock Update Types

type StockUpdateAttributes = {
  quantity?: number
  update_date?: string
  description?: string
  created_at?: string
  updated_at?: string
}

type StockUpdateData = {
  id?: string
  type: 'stock_updates'
  attributes: StockUpdateAttributes
}

type StockUpdateRequest = {
  data: StockUpdateData
}

type StockUpdateResponse = {
  data: {
    id: string
    type: 'stock_updates'
    attributes: StockUpdateAttributes
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type StockUpdateIndexResponse = {
  data: Array<{
    id: string
    type: 'stock_updates'
    attributes: StockUpdateAttributes
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

type StockUpdateQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}
