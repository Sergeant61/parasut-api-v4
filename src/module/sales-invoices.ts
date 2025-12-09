import ParasutApiV4 from '../parasut-api-v4'

class SalesInvoices {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<void, SalesInvoiceQueryParams>): Promise<ApiResponse<SalesInvoiceIndexResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<SalesInvoiceIndexResponse>('GET', `${this.parasut.options.firmaNo}/sales_invoices`, request)
  }

  async create({ data, queryParams: params }: ApiRequest<SalesInvoiceRequest, SalesInvoiceQueryParams>): Promise<ApiResponse<SalesInvoiceResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<SalesInvoiceResponse>('POST', `${this.parasut.options.firmaNo}/sales_invoices`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, SalesInvoiceQueryParams>): Promise<ApiResponse<SalesInvoiceResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<SalesInvoiceResponse>('GET', `${this.parasut.options.firmaNo}/sales_invoices/${id}`, request)
  }

  async edit(id: string, { data, queryParams: params }: ApiRequest<SalesInvoiceRequest, SalesInvoiceQueryParams>): Promise<ApiResponse<SalesInvoiceResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<SalesInvoiceResponse>('PUT', `${this.parasut.options.firmaNo}/sales_invoices/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<void, SalesInvoiceQueryParams>): Promise<ApiResponse<void>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<void>('DELETE', `${this.parasut.options.firmaNo}/sales_invoices/${id}`, request)
  }

  async pay(id: string, { data, queryParams: params }: ApiRequest<SalesInvoicePaymentRequest, SalesInvoiceQueryParams>): Promise<ApiResponse<SalesInvoiceActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<SalesInvoiceActionResponse>('POST', `${this.parasut.options.firmaNo}/sales_invoices/${id}/payments`, request)
  }

  async cancel(id: string, { queryParams: params }: ApiRequest<void, SalesInvoiceQueryParams>): Promise<ApiResponse<SalesInvoiceActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<SalesInvoiceActionResponse>('DELETE', `${this.parasut.options.firmaNo}/sales_invoices/${id}/cancel`, request)
  }

  async recover(id: string, { queryParams: params }: ApiRequest<void, SalesInvoiceQueryParams>): Promise<ApiResponse<SalesInvoiceActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<SalesInvoiceActionResponse>('PATCH', `${this.parasut.options.firmaNo}/sales_invoices/${id}/recover`, request)
  }

  async archive(id: string, { queryParams: params }: ApiRequest<void, SalesInvoiceQueryParams>): Promise<ApiResponse<SalesInvoiceActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<SalesInvoiceActionResponse>('PATCH', `${this.parasut.options.firmaNo}/sales_invoices/${id}/archive`, request)
  }

  async unarchive(id: string, { queryParams: params }: ApiRequest<void, SalesInvoiceQueryParams>): Promise<ApiResponse<SalesInvoiceActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<SalesInvoiceActionResponse>('PATCH', `${this.parasut.options.firmaNo}/sales_invoices/${id}/unarchive`, request)
  }

  async convertToInvoice(id: string, { queryParams: params }: ApiRequest<void, SalesInvoiceQueryParams>): Promise<ApiResponse<SalesInvoiceActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<SalesInvoiceActionResponse>('PATCH', `${this.parasut.options.firmaNo}/sales_invoices/${id}/convert_to_invoice`, request)
  }

  async showPdf(id: string, { queryParams: params }: ApiRequest<void, SalesInvoiceQueryParams>): Promise<ApiResponse<TrackableJobResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<TrackableJobResponse>('POST', `${this.parasut.options.firmaNo}/sales_invoices/${id}/pdf`, request)
  }
}

export default SalesInvoices
