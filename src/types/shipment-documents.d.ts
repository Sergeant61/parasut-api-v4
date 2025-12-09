// Shipment Document Types

type ShipmentDocumentAttributes = {
  document_no?: string
  document_date?: string
  description?: string
  archived?: boolean
  created_at?: string
  updated_at?: string
}

type ShipmentDocumentData = {
  id?: string
  type: 'shipment_documents'
  attributes: ShipmentDocumentAttributes
}

type ShipmentDocumentRequest = {
  data: ShipmentDocumentData
}

type ShipmentDocumentResponse = {
  data: {
    id: string
    type: 'shipment_documents'
    attributes: ShipmentDocumentAttributes
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type ShipmentDocumentIndexResponse = {
  data: Array<{
    id: string
    type: 'shipment_documents'
    attributes: ShipmentDocumentAttributes
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

type ShipmentDocumentQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}

