import axios, { AxiosInstance } from 'axios'

export default class Http {
  public headers: any;
  public baseURL: any;
  public api: AxiosInstance;
  public prefix: string = '';

  public constructor() {
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }

    this.baseURL = process.env.API_URL

    this.api = axios.create({
      baseURL: this.baseURL,
      headers: this.headers
    });

    this.requestInterceptor()
    this.responseInterceptor()
  }

  public requestInterceptor () {
    this.api.interceptors.request.use(function (config) {
      // Do something before request is sent
      const accessToken = window.localStorage.getItem('access_token')
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });
  }

  public responseInterceptor () {
    // Add a response interceptor
    this.api.interceptors.response.use((response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response.data;
    }, (error) => {
      const status = error.response.status
      switch (status) {
        case 401:
          window.location.href = '/chat/join'
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error.response.data);
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