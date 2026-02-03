import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiError } from '@/shared/types/api.types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

/**
 * HTTP Client with interceptors for error handling, auth, and logging
 */
export class HttpClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Add auth token if available
        const token = localStorage.getItem('auth_token');
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        // Log request in development
        if (import.meta.env.DEV) {
          console.log(`[API] ${config.method?.toUpperCase()} ${config.url}`);
        }

        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        const apiError: ApiError = {
          message: error.message || 'An unexpected error occurred',
          status: error.response?.status || 500,
          code: error.code,
        };

        // Handle specific error statuses
        if (error.response?.status === 401) {
          // Unauthorized - clear token and redirect to login
          localStorage.removeItem('auth_token');
          window.location.href = '/login';
        }

        return Promise.reject(apiError);
      }
    );
  }

  public getInstance(): AxiosInstance {
    return this.client;
  }

  public get = <T>(url: string, config?: InternalAxiosRequestConfig) =>
    this.client.get<T>(url, config);

  public post = <T>(url: string, data?: unknown, config?: InternalAxiosRequestConfig) =>
    this.client.post<T>(url, data, config);

  public put = <T>(url: string, data?: unknown, config?: InternalAxiosRequestConfig) =>
    this.client.put<T>(url, data, config);

  public patch = <T>(url: string, data?: unknown, config?: InternalAxiosRequestConfig) =>
    this.client.patch<T>(url, data, config);

  public delete = <T>(url: string, config?: InternalAxiosRequestConfig) =>
    this.client.delete<T>(url, config);
}

// Export singleton instance
export const httpClient = new HttpClient();
