import ParasutApiV4 from '../parasut-api-v4'

class PurchaseBills {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<void, PurchaseBillQueryParams>): Promise<ApiResponse<PurchaseBillIndexResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<PurchaseBillIndexResponse>('GET', `${this.parasut.options.firmaNo}/purchase_bills`, request)
  }

  async createBasicPurchaseBill({ data, queryParams: params }: ApiRequest<PurchaseBillRequest, PurchaseBillQueryParams>): Promise<ApiResponse<PurchaseBillResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<PurchaseBillResponse>('POST', `${this.parasut.options.firmaNo}/purchase_bills#basic`, request)
  }

  async createDetailedPurchaseBill({ data, queryParams: params }: ApiRequest<PurchaseBillRequest, PurchaseBillQueryParams>): Promise<ApiResponse<PurchaseBillResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<PurchaseBillResponse>('POST', `${this.parasut.options.firmaNo}/purchase_bills#detailed`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, PurchaseBillQueryParams>): Promise<ApiResponse<PurchaseBillResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<PurchaseBillResponse>('GET', `${this.parasut.options.firmaNo}/purchase_bills/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<void, PurchaseBillQueryParams>): Promise<ApiResponse<void>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<void>('DELETE', `${this.parasut.options.firmaNo}/purchase_bills/${id}`, request)
  }

  async editBasicPurchaseBill(id: string, { data, queryParams: params }: ApiRequest<PurchaseBillRequest, PurchaseBillQueryParams>): Promise<ApiResponse<PurchaseBillResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<PurchaseBillResponse>('PUT', `${this.parasut.options.firmaNo}/purchase_bills/${id}#basic`, request)
  }

  async editDetailedPurchaseBill(id: string, { data, queryParams: params }: ApiRequest<PurchaseBillRequest, PurchaseBillQueryParams>): Promise<ApiResponse<PurchaseBillResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<PurchaseBillResponse>('PUT', `${this.parasut.options.firmaNo}/purchase_bills/${id}#detailed`, request)
  }

  async pay(id: string, { data, queryParams: params }: ApiRequest<PurchaseBillPaymentRequest, PurchaseBillQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<ActionResponse>('POST', `${this.parasut.options.firmaNo}/purchase_bills/${id}/payments`, request)
  }

  async cancel(id: string, { queryParams: params }: ApiRequest<void, PurchaseBillQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<ActionResponse>('DELETE', `${this.parasut.options.firmaNo}/purchase_bills/${id}/cancel`, request)
  }

  async recover(id: string, { queryParams: params }: ApiRequest<void, PurchaseBillQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<ActionResponse>('PATCH', `${this.parasut.options.firmaNo}/purchase_bills/${id}/recover`, request)
  }

  async archive(id: string, { queryParams: params }: ApiRequest<void, PurchaseBillQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<ActionResponse>('PATCH', `${this.parasut.options.firmaNo}/purchase_bills/${id}/archive`, request)
  }

  async unarchive(id: string, { queryParams: params }: ApiRequest<void, PurchaseBillQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<ActionResponse>('PATCH', `${this.parasut.options.firmaNo}/purchase_bills/${id}/unarchive`, request)
  }
}

export default PurchaseBills
