// Warehouse Types

type WarehouseAttributes = {
  name: string
  archived?: boolean
  created_at?: string
  updated_at?: string
}

type WarehouseData = {
  id?: string
  type: 'warehouses'
  attributes: WarehouseAttributes
}

type WarehouseRequest = {
  data: WarehouseData
}

type WarehouseResponse = {
  data: {
    id: string
    type: 'warehouses'
    attributes: WarehouseAttributes
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type WarehouseIndexResponse = {
  data: Array<{
    id: string
    type: 'warehouses'
    attributes: WarehouseAttributes
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

type WarehouseQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}
