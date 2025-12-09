// Category Types

type CategoryAttributes = {
  name: string
  category_type?: string
  archived?: boolean
  created_at?: string
  updated_at?: string
}

type CategoryData = {
  id?: string
  type: 'categories'
  attributes: CategoryAttributes
}

type CategoryRequest = {
  data: CategoryData
}

type CategoryResponse = {
  data: {
    id: string
    type: 'categories'
    attributes: CategoryAttributes
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type CategoryIndexResponse = {
  data: Array<{
    id: string
    type: 'categories'
    attributes: CategoryAttributes
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

type CategoryQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}
