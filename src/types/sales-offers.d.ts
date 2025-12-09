// Sales Offers (Teklif) Types

type SalesOfferAttributes = {
  item_type: string
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
  payer_tax_numbers: Array<string>
  payment_account_id: number
  payment_date: string
  payment_description: string
  status?: string
  net_total_in_trl?: number
}

type SalesOfferDetails = {
  id: string
  type: string
  attributes: {
    quantity: number
    unit_price: number
    vat_rate: number
    vat_withholding_rate: number
    discount_type: string
    discount_value: number
    excise_duty_type: string
    excise_duty_value: number
    communications_tax_rate: number
    description: string
    delivery_method: string
    shipping_method: string
  }
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

type SalesOfferResponse = {
  data: {
    id: string
    type: string
    attributes: SalesOfferAttributes
    relationships: {
      details: {
        data: Array<SalesOfferDetails>
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
        data: Array<{
          id: string
          type: string
        }>
      }
      sales_invoice: {
        data?: {
          id: string
          type: string
        }
      }
    }
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type SalesOfferIndexResponse = {
  data: Array<{
    id: string
    type: string
    attributes: SalesOfferAttributes
    relationships: {
      details: {
        data: Array<SalesOfferDetails>
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
        data: Array<{
          id: string
          type: string
        }>
      }
      sales_invoice: {
        data?: {
          id: string
          type: string
        }
      }
    }
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

type SalesOfferCreateUpdateAttributes = {
  item_type: 'estimate' | 'quote'
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

type SalesOfferDetailAttributes = {
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

type SalesOfferDetail = {
  id: string
  type: string
  attributes: SalesOfferDetailAttributes
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

type SalesOfferRequest = {
  data: {
    id?: string
    type: 'sales_offers'
    attributes: SalesOfferCreateUpdateAttributes
    relationships: {
      details: {
        data: SalesOfferDetail[]
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
      sales_invoice?: {
        data: {
          id: string
          type: string
        }
      }
    }
  }
}

type SalesOfferQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}

type SalesOfferUpdateStatusRequest = {
  data: {
    status: string
  }
}

type SalesOfferEmailRequest = {
  data: {
    to?: string
    cc?: string
    bcc?: string
    subject?: string
    body?: string
  }
}

