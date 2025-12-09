import ParasutApiV4 from '../parasut-api-v4'

class Products {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<void, ProductQueryParams>): Promise<ApiResponse<ProductIndexResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<ProductIndexResponse>('GET', `${this.parasut.options.firmaNo}/products`, request)
  }

  async create({ data, queryParams: params }: ApiRequest<ProductRequest, ProductQueryParams>): Promise<ApiResponse<ProductResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<ProductResponse>('POST', `${this.parasut.options.firmaNo}/products`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, ProductQueryParams>): Promise<ApiResponse<ProductResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<ProductResponse>('GET', `${this.parasut.options.firmaNo}/products/${id}`, request)
  }

  async edit(id: string, { data, queryParams: params }: ApiRequest<ProductRequest, ProductQueryParams>): Promise<ApiResponse<ProductResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<ProductResponse>('PUT', `${this.parasut.options.firmaNo}/products/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<void, ProductQueryParams>): Promise<ApiResponse<void>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<void>('DELETE', `${this.parasut.options.firmaNo}/products/${id}`, request)
  }
}

export default Products
