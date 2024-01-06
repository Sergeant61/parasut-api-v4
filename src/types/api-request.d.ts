type ApiRequest<T, K> = {
  data?: T
  queryParams: K
  pagination?: IPagination | undefined;
}
