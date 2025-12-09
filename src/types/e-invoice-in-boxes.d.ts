// E-Invoice In Box Types

type EInvoiceInBoxAttributes = {
  invoice_id?: string
  uuid?: string
  status?: string
  created_at?: string
  updated_at?: string
}

type EInvoiceInBoxData = {
  id?: string
  type: 'e_invoice_in_boxes'
  attributes: EInvoiceInBoxAttributes
}

type EInvoiceInBoxResponse = {
  data: {
    id: string
    type: 'e_invoice_in_boxes'
    attributes: EInvoiceInBoxAttributes
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type EInvoiceInBoxIndexResponse = {
  data: Array<{
    id: string
    type: 'e_invoice_in_boxes'
    attributes: EInvoiceInBoxAttributes
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

type EInvoiceInBoxQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}
