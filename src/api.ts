import axios, { AxiosPromise, AxiosRequestConfig, Method } from 'axios'

export class Api {
  private baseUrl = 'https://api.parasut.com/v4/'
  private accessToken?: IAccessToken
  constructor(public options: IParasutApiV4Options) {
    this.baseUrl = options.baseUrl || this.baseUrl
  }

  private getTokenAuth() {
    return `${this.accessToken?.token_type} ${this.accessToken?.access_token}`
  }

  private async refreshToken() {
    const token = await this.send<IAccessToken>('post', 'oauth/token', {
      data: {
        grant_type: 'password',
        client_id: this.options.clientId,
        client_secret: this.options.clientSecret,
        username: this.options.email,
        password: this.options.password,
        redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
      },
    })

    token.data.created_at = new Date()
    this.accessToken = token.data
  }

  private async auth() {
    if (this.accessToken) {
      const diffTimestamp = Math.floor(new Date().getTime() / 1000) - this.accessToken.created_at.getTime()
      const minDifference = Math.floor(diffTimestamp / 60)

      if (minDifference < 120) {
        return true
      }
    }

    await this.refreshToken()
    return true
  }

  async send<T>(method: Method, path: string, options: IApiSendOptions) {
    const { data, params = {}, isAuth, isV4, pagination } = options
    const url = `${this.baseUrl}${isV4 ? 'v4/' : '/'}${path}`

    if (pagination) {
      const paginationKeys = Object.keys(pagination) as Array<keyof IPagination>

      paginationKeys.forEach((k) => {
        params[k] = pagination[k]
      })
    }

    const headers = Object.assign(options.headers || {}, {
      'Content-Type': 'application/json',
    })

    if (isAuth) {
      await this.auth()
      headers.Authorization = this.getTokenAuth()
    }

    return await this._call<T>({
      url,
      data,
      params,
      method,
      headers,
    })
  }

  private _call<T>(config: AxiosRequestConfig): AxiosPromise<T> {
    return axios(config)
  }
}
