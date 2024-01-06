type SalesInvoiceCreateUpdateAttributes = {
  item_type: 'invoice' | 'export' | 'estimate' | 'cancelled' | 'recurring_invoice' | 'recurring_estimate' | 'recurring_export' | 'refund'
  description: string
  issue_date: string
  due_date: string
  invoice_series: string
  invoice_id: number
  currency: string
  exchange_rate: number
  withholding_rate: number
  invoice_discount_type: string
  invoice_discount: number
  billing_address: string
  billing_postal_code: string
  billing_phone: string
  billing_fax: string
  tax_office: string
  tax_number: string
  country: string
  city: string
  district: string
  is_abroad: boolean
  order_no: string
  order_date: string
  shipment_addres: string
  shipment_included: boolean
  cash_sale: boolean
  payer_tax_numbers: string[]
  payment_account_id: number
  payment_date: string
  payment_description: string
}

type SalesInvoiceDetailAttributes = {
  quantity: number
  unit_price: number
  vat_rate: number
  vat_withholding_rate?: number
  discount_type?: string // "percentage" | "amount"
  discount_value?: number
  excise_duty_type?: string // "percentage" | "amount"
  excise_duty_value?: number
  communications_tax_rate?: number
  description?: string
  delivery_method?: string
  shipping_method?: string
}

type SalesInvoiceDetail = {
  id: string
  type: string
  attributes: SalesInvoiceDetailAttributes
  relationships: {
    product: {
      data: {
        id: string
        type: string
      }
    }
    warehouse: {
      data: {
        id: string
        type: string
      }
    }
  }
}

type SalesInvoiceRequest = {
  data: {
    id: string
    type: 'sales_invoices'
    attributes: SalesInvoiceCreateUpdateAttributes
    relationships: {
      details: {
        data: SalesInvoiceDetail[]
      }
      contact: {
        data: {
          id: string
          type: string
        }
      }
      category: {
        data: {
          id: string
          type: string
        }
      }
      tags: {
        data: {
          id: string
          type: string
        }[]
      }
      sales_offer: {
        data: {
          id: string
          type: string
        }
      }
    }
  }
}
