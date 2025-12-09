// Common Types for Actions and PDF Responses

type ActionResponse = {
  data: {
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type PdfResponse = {
  data: string | Blob
  headers?: Record<string, string>
}

