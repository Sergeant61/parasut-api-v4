import ParasutApiV4 from '../parasut-api-v4'

class Categories {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<void, CategoryQueryParams>): Promise<ApiResponse<CategoryIndexResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<CategoryIndexResponse>('GET', `${this.parasut.options.firmaNo}/item_categories`, request)
  }

  async create({ data, queryParams: params }: ApiRequest<CategoryRequest, CategoryQueryParams>): Promise<ApiResponse<CategoryResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<CategoryResponse>('POST', `${this.parasut.options.firmaNo}/item_categories`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, CategoryQueryParams>): Promise<ApiResponse<CategoryResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<CategoryResponse>('GET', `${this.parasut.options.firmaNo}/item_categories/${id}`, request)
  }

  async edit(id: string, { data, queryParams: params }: ApiRequest<CategoryRequest, CategoryQueryParams>): Promise<ApiResponse<CategoryResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<CategoryResponse>('PUT', `${this.parasut.options.firmaNo}/item_categories/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<void, CategoryQueryParams>): Promise<ApiResponse<void>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<void>('DELETE', `${this.parasut.options.firmaNo}/item_categories/${id}`, request)
  }
}

export default Categories
