import axios, { AxiosResponse } from "axios";

interface Config {
  baseURL: string;
  timeout?: number;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

class HTTPService {
  private baseURL: string;
  private timeout: number;

  constructor({ baseURL, timeout = 10000 }: Config) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }

  public async get<T>(url: string): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await axios.get<T>(
        `${this.baseURL}${url}`,
        {
          timeout: this.timeout,
        }
      );
      return { data: response.data, status: response.status };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public async post<T>(url: string, body: any): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await axios.post<T>(
        `${this.baseURL}${url}`,
        body,
        {
          timeout: this.timeout,
        }
      );
      return { data: response.data, status: response.status };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any) {
    if (error.response) {
      return new Error(
        `Server error: ${error.response.data.message || error.message}`
      );
    } else if (error.request) {
      return new Error("Network error, please try again later.");
    } else {
      return new Error(`Error: ${error.message}`);
    }
  }
}

export default HTTPService;
