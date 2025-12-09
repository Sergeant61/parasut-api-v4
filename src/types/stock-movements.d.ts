// Stock Movement Types

type StockMovementAttributes = {
  quantity?: number
  movement_date?: string
  movement_type?: string
  description?: string
  created_at?: string
  updated_at?: string
}

type StockMovementData = {
  id?: string
  type: 'stock_movements'
  attributes: StockMovementAttributes
}

type StockMovementResponse = {
  data: {
    id: string
    type: 'stock_movements'
    attributes: StockMovementAttributes
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type StockMovementIndexResponse = {
  data: Array<{
    id: string
    type: 'stock_movements'
    attributes: StockMovementAttributes
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

type StockMovementQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}

