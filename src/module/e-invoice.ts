import ParasutApiV4 from '../parasut-api-v4'

class EInvoices {
  constructor(private parasut: ParasutApiV4) {}

  async create({ data, queryParams: params }: ApiRequest<EInvoiceRequest, EInvoiceQueryParams>): Promise<ApiResponse<EInvoiceResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<EInvoiceResponse>('POST', `${this.parasut.options.firmaNo}/e_invoices`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, EInvoiceQueryParams>): Promise<ApiResponse<EInvoiceResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<EInvoiceResponse>('GET', `${this.parasut.options.firmaNo}/e_invoices/${id}`, request)
  }

  async showPdf(id: string, { queryParams: params }: ApiRequest<void, EInvoiceQueryParams>): Promise<ApiResponse<PdfResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<PdfResponse>('GET', `${this.parasut.options.firmaNo}/e_invoices/${id}/pdf`, request)
  }
}

export default EInvoices
