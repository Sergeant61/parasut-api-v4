import ParasutApiV4 from '../parasut-api-v4'

class SalesOffers {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<void, SalesOfferQueryParams>): Promise<ApiResponse<SalesOfferIndexResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<SalesOfferIndexResponse>('GET', `${this.parasut.options.firmaNo}/sales_offers`, request)
  }

  async create({ data, queryParams: params }: ApiRequest<SalesOfferRequest, SalesOfferQueryParams>): Promise<ApiResponse<SalesOfferResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<SalesOfferResponse>('POST', `${this.parasut.options.firmaNo}/sales_offers`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, SalesOfferQueryParams>): Promise<ApiResponse<SalesOfferResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<SalesOfferResponse>('GET', `${this.parasut.options.firmaNo}/sales_offers/${id}`, request)
  }

  async edit(id: string, { data, queryParams: params }: ApiRequest<SalesOfferRequest, SalesOfferQueryParams>): Promise<ApiResponse<SalesOfferResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<SalesOfferResponse>('PUT', `${this.parasut.options.firmaNo}/sales_offers/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<void, SalesOfferQueryParams>): Promise<ApiResponse<void>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<void>('DELETE', `${this.parasut.options.firmaNo}/sales_offers/${id}`, request)
  }

  async showPdf(id: string, { queryParams: params }: ApiRequest<void, SalesOfferQueryParams>): Promise<ApiResponse<TrackableJobResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<TrackableJobResponse>('POST', `${this.parasut.options.firmaNo}/sales_offers/${id}/pdf`, request)
  }

  async archive(id: string, { queryParams: params }: ApiRequest<void, SalesOfferQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<ActionResponse>('PATCH', `${this.parasut.options.firmaNo}/sales_offers/${id}/archive`, request)
  }

  async unarchive(id: string, { queryParams: params }: ApiRequest<void, SalesOfferQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<ActionResponse>('PATCH', `${this.parasut.options.firmaNo}/sales_offers/${id}/unarchive`, request)
  }

  async details(id: string, { queryParams: params }: ApiRequest<void, SalesOfferQueryParams>): Promise<ApiResponse<SalesOfferResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<SalesOfferResponse>('GET', `${this.parasut.options.firmaNo}/sales_offers/${id}/details`, request)
  }

  async updateStatus(id: string, { data, queryParams: params }: ApiRequest<SalesOfferUpdateStatusRequest, SalesOfferQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<ActionResponse>('PATCH', `${this.parasut.options.firmaNo}/sales_offers/${id}/update_status`, request)
  }

  async sendEmail(id: string, { data, queryParams: params }: ApiRequest<SalesOfferEmailRequest, SalesOfferQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<ActionResponse>('POST', `${this.parasut.options.firmaNo}/sales_offers/${id}/e-mail`, request)
  }
}

export default SalesOffers
