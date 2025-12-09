import ParasutApiV4 from '../parasut-api-v4'

class Taxes {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<void, TaxQueryParams>): Promise<ApiResponse<TaxIndexResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<TaxIndexResponse>('GET', `${this.parasut.options.firmaNo}/taxes`, request)
  }

  async create({ data, queryParams: params }: ApiRequest<TaxRequest, TaxQueryParams>): Promise<ApiResponse<TaxResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<TaxResponse>('POST', `${this.parasut.options.firmaNo}/taxes`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, TaxQueryParams>): Promise<ApiResponse<TaxResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<TaxResponse>('GET', `${this.parasut.options.firmaNo}/taxes/${id}`, request)
  }

  async edit(id: string, { data, queryParams: params }: ApiRequest<TaxRequest, TaxQueryParams>): Promise<ApiResponse<TaxResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<TaxResponse>('PUT', `${this.parasut.options.firmaNo}/taxes/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<void, TaxQueryParams>): Promise<ApiResponse<void>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<void>('DELETE', `${this.parasut.options.firmaNo}/taxes/${id}`, request)
  }

  async archive(id: string, { queryParams: params }: ApiRequest<void, TaxQueryParams>): Promise<ApiResponse<any>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('PATCH', `${this.parasut.options.firmaNo}/taxes/${id}/archive`, request)
  }

  async unarchive(id: string, { queryParams: params }: ApiRequest<void, TaxQueryParams>): Promise<ApiResponse<any>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('PATCH', `${this.parasut.options.firmaNo}/taxes/${id}/unarchive`, request)
  }

  async pay(id: string, { queryParams: params }: ApiRequest<void, TaxQueryParams>): Promise<ApiResponse<any>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('POST', `${this.parasut.options.firmaNo}/taxes/${id}/payments`, request)
  }
}

export default Taxes
