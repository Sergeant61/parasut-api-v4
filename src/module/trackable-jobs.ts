import ParasutApiV4 from '../parasut-api-v4'

class TrackableJobs {
  constructor(private parasut: ParasutApiV4) {}

  async show(id: string, { queryParams: params }: ApiRequest<void, TrackableJobQueryParams>): Promise<ApiResponse<TrackableJobResponse>> {
    const request: IApiSendOptions = {
      isV4: true,
      isAuth: true,
      params,
    }

    return this.parasut.send<TrackableJobResponse>('GET', `${this.parasut.options.firmaNo}/trackable_jobs/${id}`, request)
  }
}

export default TrackableJobs
