// Webhook Types

type WebhookAttributes = {
  name?: string
  url?: string
  events?: string[]
  is_active?: boolean
  created_at?: string
  updated_at?: string
}

type WebhookData = {
  id?: string
  type: 'webhooks'
  attributes: WebhookAttributes
}

type WebhookRequest = {
  data: WebhookData
}

type WebhookResponse = {
  data: {
    id: string
    type: 'webhooks'
    attributes: WebhookAttributes
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type WebhookIndexResponse = {
  data: Array<{
    id: string
    type: 'webhooks'
    attributes: WebhookAttributes
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

type WebhookQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}

