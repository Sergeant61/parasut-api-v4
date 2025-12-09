// API Error Response Types
type ApiErrorResponse = {
  errors: Array<{
    title: string
    detail: string
    code?: string
    source?: {
      pointer?: string
      parameter?: string
    }
    meta?: Record<string, any>
  }>
}

type ApiError = {
  response?: {
    data: ApiErrorResponse
    status: number
    statusText: string
  }
  message: string
  code?: string
}
