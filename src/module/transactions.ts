import ParasutApiV4 from '../parasut-api-v4'

class Transactions {
  constructor(private parasut: ParasutApiV4) {}

  async show(id: string, { queryParams: params }: ApiRequest<void, TransactionQueryParams>): Promise<ApiResponse<TransactionResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<TransactionResponse>('GET', `${this.parasut.options.firmaNo}/transactions/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<void, TransactionQueryParams>): Promise<ApiResponse<void>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<void>('DELETE', `${this.parasut.options.firmaNo}/transactions/${id}`, request)
  }
}

export default Transactions
