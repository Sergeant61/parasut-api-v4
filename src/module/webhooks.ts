import ParasutApiV4 from '../parasut-api-v4'

class Webhooks {
  constructor(private parasut: ParasutApiV4) {}

  async create({ data, queryParams: params }: ApiRequest<any, any>) {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<any>('POST', `${this.parasut.options.firmaNo}/webhooks`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<any, any>) {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('GET', `${this.parasut.options.firmaNo}/webhooks/${id}`, request)
  }

  async edit(id: string, { queryParams: params }: ApiRequest<any, any>) {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('PUT', `${this.parasut.options.firmaNo}/webhooks/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<any, any>) {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('DELETE', `${this.parasut.options.firmaNo}/webhooks/${id}`, request)
  }
}

export default Webhooks
