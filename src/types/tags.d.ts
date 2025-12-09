// Tag Types

type TagAttributes = {
  name: string
  archived?: boolean
  created_at?: string
  updated_at?: string
}

type TagData = {
  id?: string
  type: 'tags'
  attributes: TagAttributes
}

type TagRequest = {
  data: TagData
}

type TagResponse = {
  data: {
    id: string
    type: 'tags'
    attributes: TagAttributes
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type TagIndexResponse = {
  data: Array<{
    id: string
    type: 'tags'
    attributes: TagAttributes
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

type TagQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}
