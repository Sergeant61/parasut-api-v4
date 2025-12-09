import ParasutApiV4 from '../parasut-api-v4'

class EInvoiceInBoxes {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<void, EInvoiceInBoxQueryParams>): Promise<ApiResponse<EInvoiceInBoxIndexResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<EInvoiceInBoxIndexResponse>('GET', `${this.parasut.options.firmaNo}/e_invoice_inboxes`, request)
  }
}

export default EInvoiceInBoxes
