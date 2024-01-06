import ParasutApiV4 from '../parasut-api-v4'

class Transactions {
  constructor(private parasut: ParasutApiV4) {}

  async show(id: string, { queryParams: params }: ApiRequest<any, any>) {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('GET', `${this.parasut.options.firmaNo}/transactions/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<any, any>) {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('DELETE', `${this.parasut.options.firmaNo}/transactions/${id}`, request)

  }
}

export default Transactions
