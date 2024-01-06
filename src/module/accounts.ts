import ParasutApiV4 from '../parasut-api-v4'

class Accounts {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<any, any>) {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<any>('GET', `${this.parasut.options.firmaNo}/accounts`, request)
  }

  async create({ data, queryParams: params }: ApiRequest<any, any>) {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<any>('POST', `${this.parasut.options.firmaNo}/accounts`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<any, any>) {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('GET', `${this.parasut.options.firmaNo}/accounts/${id}`, request)
  }

  async edit(id: string, { queryParams: params }: ApiRequest<any, any>) {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('PUT', `${this.parasut.options.firmaNo}/accounts/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<any, any>) {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('DELETE', `${this.parasut.options.firmaNo}/accounts/${id}`, request)
  }

  async transactions(id: string, { queryParams: params }: ApiRequest<any, any>) {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('GET', `${this.parasut.options.firmaNo}/accounts/${id}/transactions`, request)
  }

  async debitTransactions(id: string, { queryParams: params }: ApiRequest<any, any>) {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('POST', `${this.parasut.options.firmaNo}/accounts/${id}/debit_transactions`, request)
  }

  async creditTransactions(id: string, { queryParams: params }: ApiRequest<any, any>) {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('POST', `${this.parasut.options.firmaNo}/accounts/${id}/credit_transactions`, request)
  }
}

export default Accounts
