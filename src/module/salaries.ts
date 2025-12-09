import ParasutApiV4 from '../parasut-api-v4'

class Salaries {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<void, SalaryQueryParams>): Promise<ApiResponse<SalaryIndexResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<SalaryIndexResponse>('GET', `${this.parasut.options.firmaNo}/salaries`, request)
  }

  async create({ data, queryParams: params }: ApiRequest<SalaryRequest, SalaryQueryParams>): Promise<ApiResponse<SalaryResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<SalaryResponse>('POST', `${this.parasut.options.firmaNo}/salaries`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, SalaryQueryParams>): Promise<ApiResponse<SalaryResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<SalaryResponse>('GET', `${this.parasut.options.firmaNo}/salaries/${id}`, request)
  }

  async edit(id: string, { data, queryParams: params }: ApiRequest<SalaryRequest, SalaryQueryParams>): Promise<ApiResponse<SalaryResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<SalaryResponse>('PUT', `${this.parasut.options.firmaNo}/salaries/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<void, SalaryQueryParams>): Promise<ApiResponse<void>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<void>('DELETE', `${this.parasut.options.firmaNo}/salaries/${id}`, request)
  }

  async archive(id: string, { queryParams: params }: ApiRequest<void, SalaryQueryParams>): Promise<ApiResponse<any>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('PATCH', `${this.parasut.options.firmaNo}/salaries/${id}/archive`, request)
  }

  async unarchive(id: string, { queryParams: params }: ApiRequest<void, SalaryQueryParams>): Promise<ApiResponse<any>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('PATCH', `${this.parasut.options.firmaNo}/salaries/${id}/unarchive`, request)
  }

  async pay(id: string, { queryParams: params }: ApiRequest<void, SalaryQueryParams>): Promise<ApiResponse<any>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('POST', `${this.parasut.options.firmaNo}/salaries/${id}/payments`, request)
  }
}

export default Salaries
