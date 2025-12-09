// Purchase Bill Types

type PurchaseBillDetailAttributes = {
  quantity: number
  unit_price: number
  vat_rate: number
  vat_withholding_rate?: number
  discount_type?: string
  discount_value?: number
  excise_duty_type?: string
  excise_duty_value?: number
  communications_tax_rate?: number
  description?: string
  delivery_method?: string
  shipping_method?: string
}

type PurchaseBillDetail = {
  id?: string
  type: string
  attributes: PurchaseBillDetailAttributes
  relationships?: {
    product?: {
      data?: {
        id: string
        type: string
      }
    }
    warehouse?: {
      data?: {
        id: string
        type: string
      }
    }
  }
}

type PurchaseBillAttributes = {
  item_type?: 'purchase_bill' | 'refund' | 'cancelled'
  description?: string
  issue_date: string
  due_date?: string
  invoice_series?: string
  invoice_id?: number
  currency?: string
  exchange_rate?: number
  withholding_rate?: number
  invoice_discount_type?: string
  invoice_discount?: number
  billing_address?: string
  billing_postal_code?: string
  billing_phone?: string
  billing_fax?: string
  tax_office?: string
  tax_number?: string
  country?: string
  city?: string
  district?: string
  is_abroad?: boolean
  order_no?: string
  order_date?: string
  shipment_address?: string
  shipment_included?: boolean
  cash_sale?: boolean
  payment_account_id?: number
  payment_date?: string
  payment_description?: string
  archived?: boolean
  created_at?: string
  updated_at?: string
}

type PurchaseBillRelationships = {
  details?: {
    data?: Array<PurchaseBillDetail>
  }
  contact?: {
    data?: {
      id: string
      type: string
    }
  }
  category?: {
    data?: {
      id: string
      type: string
    }
  }
  tags?: {
    data?: Array<{
      id: string
      type: string
    }>
  }
}

type PurchaseBillData = {
  id?: string
  type: 'purchase_bills'
  attributes: PurchaseBillAttributes
  relationships?: PurchaseBillRelationships
}

type PurchaseBillRequest = {
  data: PurchaseBillData
}

type PurchaseBillResponse = {
  data: {
    id: string
    type: 'purchase_bills'
    attributes: PurchaseBillAttributes
    relationships?: PurchaseBillRelationships
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type PurchaseBillIndexResponse = {
  data: Array<{
    id: string
    type: 'purchase_bills'
    attributes: PurchaseBillAttributes
    relationships?: PurchaseBillRelationships
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

type PurchaseBillQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}

type PurchaseBillPaymentRequest = {
  data: {
    account_id: string
    amount?: number
    date?: string
    description?: string
  }
}

