// Inventory Level Types

type InventoryLevelAttributes = {
  quantity?: number
  reserved_quantity?: number
  available_quantity?: number
  created_at?: string
  updated_at?: string
}

type InventoryLevelData = {
  id?: string
  type: 'inventory_levels'
  attributes: InventoryLevelAttributes
}

type InventoryLevelResponse = {
  data: {
    id: string
    type: 'inventory_levels'
    attributes: InventoryLevelAttributes
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type InventoryLevelIndexResponse = {
  data: Array<{
    id: string
    type: 'inventory_levels'
    attributes: InventoryLevelAttributes
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

type InventoryLevelQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}

