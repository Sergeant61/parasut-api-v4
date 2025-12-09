import ParasutApiV4 from '../parasut-api-v4'

class BankFees {
  constructor(private parasut: ParasutApiV4) {}

  async create({ data, queryParams: params }: ApiRequest<BankFeeRequest, BankFeeQueryParams>): Promise<ApiResponse<BankFeeResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<BankFeeResponse>('POST', `${this.parasut.options.firmaNo}/bank_fees`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, BankFeeQueryParams>): Promise<ApiResponse<BankFeeResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<BankFeeResponse>('GET', `${this.parasut.options.firmaNo}/bank_fees/${id}`, request)
  }

  async edit(id: string, { data, queryParams: params }: ApiRequest<BankFeeRequest, BankFeeQueryParams>): Promise<ApiResponse<BankFeeResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<BankFeeResponse>('PUT', `${this.parasut.options.firmaNo}/bank_fees/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<void, BankFeeQueryParams>): Promise<ApiResponse<void>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<void>('DELETE', `${this.parasut.options.firmaNo}/bank_fees/${id}`, request)
  }

  async archive(id: string, { queryParams: params }: ApiRequest<void, BankFeeQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<ActionResponse>('PATCH', `${this.parasut.options.firmaNo}/bank_fees/${id}/archive`, request)
  }

  async unarchive(id: string, { queryParams: params }: ApiRequest<void, BankFeeQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<ActionResponse>('PATCH', `${this.parasut.options.firmaNo}/bank_fees/${id}/unarchive`, request)
  }

  async pay(id: string, { queryParams: params }: ApiRequest<void, BankFeeQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<ActionResponse>('POST', `${this.parasut.options.firmaNo}/bank_fees/${id}/payments`, request)
  }
}

export default BankFees
