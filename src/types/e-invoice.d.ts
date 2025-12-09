// E-Invoice Types

type EInvoiceAttributes = {
  invoice_id?: string
  uuid?: string
  status?: string
  created_at?: string
  updated_at?: string
}

type EInvoiceData = {
  id?: string
  type: 'e_invoices'
  attributes: EInvoiceAttributes
}

type EInvoiceRequest = {
  data: EInvoiceData
}

type EInvoiceResponse = {
  data: {
    id: string
    type: 'e_invoices'
    attributes: EInvoiceAttributes
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type EInvoiceIndexResponse = {
  data: Array<{
    id: string
    type: 'e_invoices'
    attributes: EInvoiceAttributes
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

type EInvoiceQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}

