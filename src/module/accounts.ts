import ParasutApiV4 from '../parasut-api-v4'

class Accounts {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<void, AccountQueryParams>): Promise<ApiResponse<AccountIndexResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<AccountIndexResponse>('GET', `${this.parasut.options.firmaNo}/accounts`, request)
  }

  async create({ data, queryParams: params }: ApiRequest<AccountRequest, AccountQueryParams>): Promise<ApiResponse<AccountResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<AccountResponse>('POST', `${this.parasut.options.firmaNo}/accounts`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, AccountQueryParams>): Promise<ApiResponse<AccountResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<AccountResponse>('GET', `${this.parasut.options.firmaNo}/accounts/${id}`, request)
  }

  async edit(id: string, { data, queryParams: params }: ApiRequest<AccountRequest, AccountQueryParams>): Promise<ApiResponse<AccountResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<AccountResponse>('PUT', `${this.parasut.options.firmaNo}/accounts/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<void, AccountQueryParams>): Promise<ApiResponse<void>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<void>('DELETE', `${this.parasut.options.firmaNo}/accounts/${id}`, request)
  }

  async transactions(id: string, { queryParams: params }: ApiRequest<void, AccountQueryParams>): Promise<ApiResponse<AccountTransactionsResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<AccountTransactionsResponse>('GET', `${this.parasut.options.firmaNo}/accounts/${id}/transactions`, request)
  }

  async debitTransactions(id: string, { data, queryParams: params }: ApiRequest<AccountTransactionRequest, AccountQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<ActionResponse>('POST', `${this.parasut.options.firmaNo}/accounts/${id}/debit_transactions`, request)
  }

  async creditTransactions(id: string, { data, queryParams: params }: ApiRequest<AccountTransactionRequest, AccountQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<ActionResponse>('POST', `${this.parasut.options.firmaNo}/accounts/${id}/credit_transactions`, request)
  }
}

export default Accounts
