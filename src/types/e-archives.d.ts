// E-Archive Types

type EArchiveAttributes = {
  archive_id?: string
  uuid?: string
  status?: string
  created_at?: string
  updated_at?: string
}

type EArchiveData = {
  id?: string
  type: 'e_archives'
  attributes: EArchiveAttributes
}

type EArchiveRequest = {
  data: EArchiveData
}

type EArchiveResponse = {
  data: {
    id: string
    type: 'e_archives'
    attributes: EArchiveAttributes
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type EArchiveIndexResponse = {
  data: Array<{
    id: string
    type: 'e_archives'
    attributes: EArchiveAttributes
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

type EArchiveQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}
