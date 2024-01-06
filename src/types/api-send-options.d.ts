type IPagination = {
  size: number
  limit: number
}

type IApiSendOptions = {
  data?: any
  params?: Record<string, any>
  headers?: Record<string, any>
  isV4?: boolean
  isAuth?: boolean
  pagination?: IPagination
}
