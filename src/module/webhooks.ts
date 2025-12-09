import ParasutApiV4 from '../parasut-api-v4'

class Webhooks {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<void, WebhookQueryParams>): Promise<ApiResponse<WebhookIndexResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<WebhookIndexResponse>('GET', `${this.parasut.options.firmaNo}/webhooks`, request)
  }

  async create({ data, queryParams: params }: ApiRequest<WebhookRequest, WebhookQueryParams>): Promise<ApiResponse<WebhookResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<WebhookResponse>('POST', `${this.parasut.options.firmaNo}/webhooks`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, WebhookQueryParams>): Promise<ApiResponse<WebhookResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<WebhookResponse>('GET', `${this.parasut.options.firmaNo}/webhooks/${id}`, request)
  }

  async edit(id: string, { data, queryParams: params }: ApiRequest<WebhookRequest, WebhookQueryParams>): Promise<ApiResponse<WebhookResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<WebhookResponse>('PUT', `${this.parasut.options.firmaNo}/webhooks/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<void, WebhookQueryParams>): Promise<ApiResponse<void>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<void>('DELETE', `${this.parasut.options.firmaNo}/webhooks/${id}`, request)
  }
}

export default Webhooks
