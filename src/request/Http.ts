import axios, { AxiosInstance } from 'axios'

export default class Http {
  public headers: any;
  public baseURL: string;
  public api: AxiosInstance;
  public prefix: string = '';

  public constructor() {
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }

    this.headers.Authorization = `Bearer`
    this.baseURL = 'http://localhost:3007'

    this.api = axios.create({
      baseURL: this.baseURL,
      headers: this.headers
    });
  }

  public requestInterceptor () {
    this.api.interceptors.request.use(function (config) {
      // Do something before request is sent
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });
  }

  public responseInterceptor () {
    // Add a response interceptor
    this.api.interceptors.response.use(function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    }, function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    });
  }

  public getHeaders () {
    return this.headers
  }

  public post (path = '', data: any, params = {}, headers = this.getHeaders(), config = {}) {
    return this.api.post(this.getPath(path), data, { params: params, headers, ...config })
  }

  get (path = '', params = {}, headers = this.getHeaders(), config = {}) {
    return this.api.get(this.getPath(path), { params: params, headers, ...config })
  }

  public getPath (path: string) {
    return this.prefix + path
  }
}