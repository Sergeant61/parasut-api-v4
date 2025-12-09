// Employee Types

type EmployeeAttributes = {
  name?: string
  email?: string
  phone?: string
  archived?: boolean
  created_at?: string
  updated_at?: string
}

type EmployeeData = {
  id?: string
  type: 'employees'
  attributes: EmployeeAttributes
}

type EmployeeRequest = {
  data: EmployeeData
}

type EmployeeResponse = {
  data: {
    id: string
    type: 'employees'
    attributes: EmployeeAttributes
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type EmployeeIndexResponse = {
  data: Array<{
    id: string
    type: 'employees'
    attributes: EmployeeAttributes
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

type EmployeeQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}

