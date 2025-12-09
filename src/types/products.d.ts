// Product Types

type ProductAttributes = {
  name: string
  vat_rate?: number
  vat_withholding_rate?: number
  sales_excise_duty?: number
  sales_excise_duty_type?: string
  purchase_excise_duty?: number
  purchase_excise_duty_type?: string
  communications_tax_rate?: number
  archived?: boolean
  list_price?: number
  currency?: string
  buy_price?: number
  buy_currency?: string
  track_inventory?: boolean
  stock_count?: number
  unit?: string
  inventory_tracking_type?: string
  initial_stock_count?: number
  created_at?: string
  updated_at?: string
}

type ProductRelationships = {
  category?: {
    data?: {
      id: string
      type: string
    }
  }
  sales_invoice_details?: {
    data?: Array<{
      id: string
      type: string
    }>
  }
  purchase_bill_details?: {
    data?: Array<{
      id: string
      type: string
    }>
  }
  inventory_levels?: {
    data?: Array<{
      id: string
      type: string
    }>
  }
}

type ProductData = {
  id?: string
  type: 'products'
  attributes: ProductAttributes
  relationships?: ProductRelationships
}

type ProductRequest = {
  data: ProductData
}

type ProductResponse = {
  data: {
    id: string
    type: 'products'
    attributes: ProductAttributes
    relationships?: ProductRelationships
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type ProductIndexResponse = {
  data: Array<{
    id: string
    type: 'products'
    attributes: ProductAttributes
    relationships?: ProductRelationships
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

type ProductQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}
