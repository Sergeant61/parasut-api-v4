import ParasutApiV4 from '../parasut-api-v4'

class StockUpdates {
  constructor(private parasut: ParasutApiV4) {}

  async create({ data, queryParams: params }: ApiRequest<StockUpdateRequest, StockUpdateQueryParams>): Promise<ApiResponse<StockUpdateResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<StockUpdateResponse>('POST', `${this.parasut.options.firmaNo}/stock_updates`, request)
  }
}

export default StockUpdates
