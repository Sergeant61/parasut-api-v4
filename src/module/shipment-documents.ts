import ParasutApiV4 from '../parasut-api-v4'

class ShipmentDocuments {
  constructor(private parasut: ParasutApiV4) {}

  async index({ queryParams: params, pagination }: ApiRequest<void, ShipmentDocumentQueryParams>): Promise<ApiResponse<ShipmentDocumentIndexResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
      pagination,
    }

    return this.parasut.send<ShipmentDocumentIndexResponse>('GET', `${this.parasut.options.firmaNo}/shipment_documents`, request)
  }

  async create({ data, queryParams: params }: ApiRequest<ShipmentDocumentRequest, ShipmentDocumentQueryParams>): Promise<ApiResponse<ShipmentDocumentResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<ShipmentDocumentResponse>('POST', `${this.parasut.options.firmaNo}/shipment_documents`, request)
  }

  async show(id: string, { queryParams: params }: ApiRequest<void, ShipmentDocumentQueryParams>): Promise<ApiResponse<ShipmentDocumentResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<ShipmentDocumentResponse>('GET', `${this.parasut.options.firmaNo}/shipment_documents/${id}`, request)
  }

  async edit(id: string, { data, queryParams: params }: ApiRequest<ShipmentDocumentRequest, ShipmentDocumentQueryParams>): Promise<ApiResponse<ShipmentDocumentResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      data,
      params,
    }

    return this.parasut.send<ShipmentDocumentResponse>('PUT', `${this.parasut.options.firmaNo}/shipment_documents/${id}`, request)
  }

  async delete(id: string, { queryParams: params }: ApiRequest<void, ShipmentDocumentQueryParams>): Promise<ApiResponse<void>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<void>('DELETE', `${this.parasut.options.firmaNo}/shipment_documents/${id}`, request)
  }
}

export default ShipmentDocuments
