import Config from 'react-native-config';
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

class API {
  private _axiosClient: AxiosInstance;

  private static _instance: API;

  private constructor(baseURL: string | undefined) {
    this._axiosClient = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public static getInstance(baseURL: string | undefined): API {
    return this._instance || (this._instance = new this(baseURL));
  }

  public get<T>(
    url: string = '',
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this._axiosClient.get<T>(url, config);
  }

  public post<T>(
    url: string = '',
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this._axiosClient.post<T>(url, data, config);
  }

  public put<T>(
    url: string = '',
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this._axiosClient.put<T>(url, data, config);
  }

  public delete<T>(
    url: string = '',
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this._axiosClient.delete<T>(url, config);
  }
}

const apiInstance = API.getInstance(Config.API_URL);

export default apiInstance;
