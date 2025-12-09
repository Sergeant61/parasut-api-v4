import ParasutApiV4 from '../parasut-api-v4'

class StockMovements {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<void, StockMovementQueryParams>): Promise<ApiResponse<StockMovementIndexResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<StockMovementIndexResponse>('GET', `${this.parasut.options.firmaNo}/stock_movements`, request)
  }
}

export default StockMovements
