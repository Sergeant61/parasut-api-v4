import ParasutApiV4 from '../parasut-api-v4'

class ESmms {
  constructor(private parasut: ParasutApiV4) {}

  async create({ data, queryParams: params }: ApiRequest<ESmmsRequest, ESmmsQueryParams>): Promise<ApiResponse<ESmmsResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<ESmmsResponse>('POST', `${this.parasut.options.firmaNo}/e_smms`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, ESmmsQueryParams>): Promise<ApiResponse<ESmmsResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<ESmmsResponse>('GET', `${this.parasut.options.firmaNo}/e_smms/${id}`, request)
  }

  async showPdf(id: string, { queryParams: params }: ApiRequest<void, ESmmsQueryParams>): Promise<ApiResponse<any>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<any>('GET', `${this.parasut.options.firmaNo}/e_smms/${id}/pdf`, request)
  }
}

export default ESmms
