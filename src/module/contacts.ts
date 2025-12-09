import ParasutApiV4 from '../parasut-api-v4'

class Contacts {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<void, ContactQueryParams>): Promise<ApiResponse<ContactIndexResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<ContactIndexResponse>('GET', `${this.parasut.options.firmaNo}/contacts`, request)
  }

  async create({ data, queryParams: params }: ApiRequest<ContactData, ContactQueryParams>): Promise<ApiResponse<ContactResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<ContactResponse>('POST', `${this.parasut.options.firmaNo}/contacts`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, ContactQueryParams>): Promise<ApiResponse<ContactResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<ContactResponse>('GET', `${this.parasut.options.firmaNo}/contacts/${id}`, request)
  }

  async edit(id: string, { data, queryParams: params }: ApiRequest<ContactData, ContactQueryParams>): Promise<ApiResponse<ContactResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<ContactResponse>('PUT', `${this.parasut.options.firmaNo}/contacts/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<void, ContactQueryParams>): Promise<ApiResponse<void>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<void>('DELETE', `${this.parasut.options.firmaNo}/contacts/${id}`, request)
  }

  async contactDebitTransactions(id: string, { data, queryParams: params }: ApiRequest<ContactDebitTransactionRequest, ContactQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<ActionResponse>('POST', `${this.parasut.options.firmaNo}/contacts/${id}/contact_debit_transactions`, request)
  }

  async contactCreditTransactions(id: string, { data, queryParams: params }: ApiRequest<ContactCreditTransactionRequest, ContactQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<ActionResponse>('POST', `${this.parasut.options.firmaNo}/contacts/${id}/contact_credit_transactions`, request)
  }
}

export default Contacts
