// E-SMMS Types

type ESmmsAttributes = {
  document_id?: string
  uuid?: string
  status?: string
  created_at?: string
  updated_at?: string
}

type ESmmsData = {
  id?: string
  type: 'e_smms'
  attributes: ESmmsAttributes
}

type ESmmsRequest = {
  data: ESmmsData
}

type ESmmsResponse = {
  data: {
    id: string
    type: 'e_smms'
    attributes: ESmmsAttributes
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type ESmmsIndexResponse = {
  data: Array<{
    id: string
    type: 'e_smms'
    attributes: ESmmsAttributes
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

type ESmmsQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}

