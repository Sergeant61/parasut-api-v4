// Salary Types

type SalaryAttributes = {
  name?: string
  amount?: number
  currency?: string
  salary_date?: string
  archived?: boolean
  created_at?: string
  updated_at?: string
}

type SalaryData = {
  id?: string
  type: 'salaries'
  attributes: SalaryAttributes
}

type SalaryRequest = {
  data: SalaryData
}

type SalaryResponse = {
  data: {
    id: string
    type: 'salaries'
    attributes: SalaryAttributes
  }
  included?: Array<{
    id: string
    type: string
    attributes: Record<string, any>
    relationships?: Record<string, any>
  }>
}

type SalaryIndexResponse = {
  data: Array<{
    id: string
    type: 'salaries'
    attributes: SalaryAttributes
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

type SalaryQueryParams = {
  sort?: string
  filter?: Record<string, any>
  include?: string
}
