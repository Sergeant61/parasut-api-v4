import ParasutApiV4 from '../parasut-api-v4'

class Tags {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<void, TagQueryParams>): Promise<ApiResponse<TagIndexResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<TagIndexResponse>('GET', `${this.parasut.options.firmaNo}/tags`, request)
  }

  async create({ data, queryParams: params }: ApiRequest<TagRequest, TagQueryParams>): Promise<ApiResponse<TagResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<TagResponse>('POST', `${this.parasut.options.firmaNo}/tags`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, TagQueryParams>): Promise<ApiResponse<TagResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<TagResponse>('GET', `${this.parasut.options.firmaNo}/tags/${id}`, request)
  }

  async edit(id: string, { data, queryParams: params }: ApiRequest<TagRequest, TagQueryParams>): Promise<ApiResponse<TagResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<TagResponse>('PUT', `${this.parasut.options.firmaNo}/tags/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<void, TagQueryParams>): Promise<ApiResponse<void>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<void>('DELETE', `${this.parasut.options.firmaNo}/tags/${id}`, request)
  }
}

export default Tags
