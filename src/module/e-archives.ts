import ParasutApiV4 from '../parasut-api-v4'

class EArchives {
  constructor(private parasut: ParasutApiV4) {}

  async create({ data, queryParams: params }: ApiRequest<EArchiveRequest, EArchiveQueryParams>): Promise<ApiResponse<EArchiveResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<EArchiveResponse>('POST', `${this.parasut.options.firmaNo}/e_archives`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, EArchiveQueryParams>): Promise<ApiResponse<EArchiveResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<EArchiveResponse>('GET', `${this.parasut.options.firmaNo}/e_archives/${id}`, request)
  }

  async showPdf(id: string, { queryParams: params }: ApiRequest<void, EArchiveQueryParams>): Promise<ApiResponse<PdfResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<PdfResponse>('GET', `${this.parasut.options.firmaNo}/e_archives/${id}/pdf`, request)
  }
}

export default EArchives
