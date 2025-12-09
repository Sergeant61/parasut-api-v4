import ParasutApiV4 from '../parasut-api-v4'

class Employees {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<void, EmployeeQueryParams>): Promise<ApiResponse<EmployeeIndexResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<EmployeeIndexResponse>('GET', `${this.parasut.options.firmaNo}/employees`, request)
  }

  async create({ data, queryParams: params }: ApiRequest<EmployeeRequest, EmployeeQueryParams>): Promise<ApiResponse<EmployeeResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<EmployeeResponse>('POST', `${this.parasut.options.firmaNo}/employees`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, EmployeeQueryParams>): Promise<ApiResponse<EmployeeResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<EmployeeResponse>('GET', `${this.parasut.options.firmaNo}/employees/${id}`, request)
  }

  async edit(id: string, { data, queryParams: params }: ApiRequest<EmployeeRequest, EmployeeQueryParams>): Promise<ApiResponse<EmployeeResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<EmployeeResponse>('PUT', `${this.parasut.options.firmaNo}/employees/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<void, EmployeeQueryParams>): Promise<ApiResponse<void>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<void>('DELETE', `${this.parasut.options.firmaNo}/employees/${id}`, request)
  }

  async archive(id: string, { queryParams: params }: ApiRequest<void, EmployeeQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<ActionResponse>('PATCH', `${this.parasut.options.firmaNo}/employees/${id}/archive`, request)
  }

  async unarchive(id: string, { queryParams: params }: ApiRequest<void, EmployeeQueryParams>): Promise<ApiResponse<ActionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<ActionResponse>('PATCH', `${this.parasut.options.firmaNo}/employees/${id}/unarchive`, request)
  }
}

export default Employees
