import ParasutApiV4 from '../parasut-api-v4'

class Warehouses {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<void, WarehouseQueryParams>): Promise<ApiResponse<WarehouseIndexResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<WarehouseIndexResponse>('GET', `${this.parasut.options.firmaNo}/warehouses`, request)
  }

  async create({ data, queryParams: params }: ApiRequest<WarehouseRequest, WarehouseQueryParams>): Promise<ApiResponse<WarehouseResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<WarehouseResponse>('POST', `${this.parasut.options.firmaNo}/warehouses`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, WarehouseQueryParams>): Promise<ApiResponse<WarehouseResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<WarehouseResponse>('GET', `${this.parasut.options.firmaNo}/warehouses/${id}`, request)
  }

  async edit(id: string, { data, queryParams: params }: ApiRequest<WarehouseRequest, WarehouseQueryParams>): Promise<ApiResponse<WarehouseResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<WarehouseResponse>('PUT', `${this.parasut.options.firmaNo}/warehouses/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<void, WarehouseQueryParams>): Promise<ApiResponse<void>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<void>('DELETE', `${this.parasut.options.firmaNo}/warehouses/${id}`, request)
  }
}

export default Warehouses
